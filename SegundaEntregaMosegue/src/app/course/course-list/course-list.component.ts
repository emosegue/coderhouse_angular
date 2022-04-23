import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Observable, Subscription } from 'rxjs';
import { Course } from 'src/app/core/models/course.model';
import { CourseService } from '../../core/services/course.service';

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

  test(action: any, data: any) {
    console.log(action, data);
    console.log(this.courses);
  }
}
