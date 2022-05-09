import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Observable, Subscription } from 'rxjs';
import { Course } from 'src/app/core/models/course.model';
import { CourseService } from '../../core/services/course.service';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'idCourse',
    'name',
    'duration',
    'professor',
    'action',
  ];

  @ViewChild(MatTable, { static: true }) table?: MatTable<any>;
  course$!: Observable<Course[]>;
  courses: Course[] = [];
  subscription!: Subscription;
  constructor(
    private dialog: MatDialog,
    private courseService: CourseService,
    public iziToast: Ng2IzitoastService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.course$ = this.courseService.getCourses$();
    this.subscription! = this.course$.subscribe(courses => {
      this.courses = courses;
    });
  }

  openDialog(action: any, obj: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = true;
    obj.action = action;
    dialogConfig.data = obj;
    if (action === 'Update' || action === 'Add') {
      dialogConfig.width = '700px';
      dialogConfig.height = '550px';
    } else {
      dialogConfig.width = '500px';
      dialogConfig.height = '200px';
    }

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addCourse(result.data);
      } else if (result.event == 'Update') {
        this.updateCourse(result.data);
      } else if (result.event == 'Delete') {
        this.deleteCourse(result.data);
      }
    });
  }

  addCourse(result: any) {
    let newCourse = {} as Course;
    newCourse.idCourse = this.courseService.getNewId();
    newCourse.name = result.name;
    newCourse.startDate = result.startDate;
    newCourse.endDate = result.endDate;
    newCourse.amountHours = result.amountHours;
    newCourse.professor = result.professor;
    this.courseService.addCourse(newCourse).subscribe(course => {
      this.courses.push(course);
      this.table?.renderRows();
      this.showIziToast(`El curso ${result.name}  se cargo correctamente`);
    });
  }

  updateCourse(result: any) {
    this.courseService.updateCourse(result).subscribe(course => {
      this.courses[
        this.courses.findIndex(c => c.idCourse === result.idCourse)
      ] = result;
      this.table?.renderRows();
      this.showIziToast(`El curso ${result.name} se ha actualizado `);
    });
  }

  deleteCourse(result: any): void {
    this.courseService.deleteCourse(result.idCourse).subscribe({
      next: deletedCourse => {
        this.courses = this.courses.filter(
          course => course.idCourse !== deletedCourse.idCourse
        );
        this.table?.renderRows();
        this.showIziToast(`El curso ${result.name} se elimino`);
        //modificaciones en cascada, borro el alumno?
      },
      error: error => {
        console.error('No se pudo eliminar el curso', error);
      },
    });
  }

  showIziToast(itMsg: string) {
    this.iziToast.show({
      title: itMsg,
      timeout: 2000,
      color: 'green',
      position: 'topCenter',
    });
  }
  
  hasAdminLogged() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.accountType ? user.accountType.includes(1) : false;
  }
}
