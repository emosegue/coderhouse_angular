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
        console.log(result.data);
      } else if (result.event == 'Update') {
        console.log(result.data);
      } else if (result.event == 'Delete') {
        console.log(result.data);
      }
    });
  }

  test(action: any, data: any) {
    console.log(action, data);
    console.log(this.courses);
  }
}
