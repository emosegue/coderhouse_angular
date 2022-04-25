import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../../core/services/course.service';
import { InscriptionService } from '../../core/services/inscription.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Inscription } from '../../core/models/inscription.model';
import { Course } from 'src/app/core/models/course.model';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InscriptionDialogComponent } from 'src/app/inscription/inscription-dialog/inscription-dialog.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  displayedColumns: string[] = [
    'idInscription',
    'course',
    'inscriptionDate',
    'action',
  ];

  @ViewChild(MatTable, { static: true }) table?: MatTable<any>;
  idCourse!: number;
  courseDetails = { professor: { firstName: '', lastName: '' } } as Course;
  notifier = new Subject();
  courseInscriptions: Inscription[] = [];

  constructor(
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private inscriptionService: InscriptionService,
    public iziToast: Ng2IzitoastService
  ) {}

  async ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.notifier))
      .subscribe((params: ParamMap) => {
        let _id: string | null = params.get('id');
        this.idCourse = _id != null ? parseInt(_id) : 0;
        this.courseService
          .getCourseById$(this.idCourse)
          .subscribe(courseDetails => {
            this.courseDetails = courseDetails;
          });
        this.inscriptionService
          .getStudentsByCourse$(this.idCourse)
          .subscribe(inscriptions => {
            this.courseInscriptions = inscriptions;
          });
      });
  }

  doAction(inscriptionToDelete: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = true;
    inscriptionToDelete.action = 'Delete';
    dialogConfig.data = inscriptionToDelete;
    dialogConfig.width = '500px';
    dialogConfig.height = '200px';
    const dialogRef = this.dialog.open(
      InscriptionDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Delete') {
        this.inscriptionService
          .deleteInscription(inscriptionToDelete.idInscription)
          .subscribe({
            next: deletedInscription => {
              this.courseInscriptions = this.courseInscriptions.filter(
                inscription =>
                  inscription.course.idCourse !==
                  deletedInscription.course.idCourse
              );
              this.table?.renderRows();
              this.showIziToast(
                `La inscripcion al curso ${inscriptionToDelete.course.name} se elimino`
              );
            },
            error: error => {
              console.error('No se pudo eliminar el curso', error);
            },
          });
      }
    });
  }

  NgOnDestroy() {
    this.notifier.next(0);
    this.notifier.complete();
  }

  showIziToast(itMsg: string) {
    this.iziToast.show({
      title: itMsg,
      timeout: 2000,
      color: 'green',
      position: 'topCenter',
    });
  }
}
