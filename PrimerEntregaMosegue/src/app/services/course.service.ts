import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from '../entities/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courseObservable: Observable<any>;
  private courseSubject: Subject<any>;
  courses: Course[] = [];

  constructor() {
    this.courseObservable = new Observable(suscription =>
      suscription.next(this.courses)
    );
    this.courseSubject = new Subject();
  }

  getCourses() {
    return this.courses;
  }

  getObservable() {
    return this.courseObservable;
  }

  deleteCourse(idCourse: number) {
    this.courses.splice(
      this.courses.findIndex(c => c.idCourse === idCourse),
      1
    );
  }

  addCourse(newCourse: Course) {
    this.courses.push(newCourse);
    return this.courses;
  }

  modifyCourse(modifiedCourse: Course) {
    this.courses[
      this.courses.findIndex(c => c.idCourse === modifiedCourse.idCourse)
    ] = modifiedCourse;
  }
}
