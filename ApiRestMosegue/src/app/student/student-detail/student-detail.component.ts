import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { InscriptionService } from '../../core/services/inscription.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Inscription } from '../../core/models/inscription.model';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { MatTable } from '@angular/material/table';
import { InscriptionListComponent } from '../../inscription/inscription-list/inscription-list.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InscriptionDialogComponent } from '../../inscription/inscription-dialog/inscription-dialog.component';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnInit {
  contentLoaded: Promise<boolean> | undefined;
  displayedColumns: string[] = [
    'idInscription',
    'course',
    'inscriptionDate',
    'action',
  ];
  @ViewChild(MatTable, { static: true }) table?: MatTable<any>;
  idUser!: number;
  userDetails: any = {};
  notifier = new Subject();
  studentInscriptions: Inscription[] = [];

  constructor(
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private inscriptionService: InscriptionService,
    private iziToast: Ng2IzitoastService
  ) {}

  async ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.notifier))
      .subscribe((params: ParamMap) => {
        let _id: string | null = params.get('id');
        this.idUser = _id != null ? parseInt(_id) : 0;
        this.userService.getUserById$(this.idUser).subscribe(userDetails => {
          this.userDetails = userDetails;
          this.contentLoaded = Promise.resolve(true);
        });
        this.inscriptionService
          .getCoursesByStudent$(this.idUser)
          .subscribe(inscriptions => {
            this.studentInscriptions = inscriptions;
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
              this.studentInscriptions = this.studentInscriptions.filter(
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
