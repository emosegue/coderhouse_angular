import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private API_URL =
    'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/courses';

  constructor(private httpClient: HttpClient) {}

  getCourses$(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API_URL);
  }

  getCourseById$(idCourse: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.API_URL}/${idCourse}`);
  }

  deleteCourse(idCourse: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${idCourse}`);
  }

  //indico a traves del subject que se genero un nuevo evento.
  addCourse(newCourse: Course): Observable<any> {
    return this.httpClient.post(`${this.API_URL}`, newCourse);
  }

  updateCourse(modifiedCourse: Course): Observable<any> {
    return this.httpClient.put(
      `${this.API_URL}/${modifiedCourse.idCourse}`,
      modifiedCourse
    );
  }

  getNewId() {
    this.httpClient.get(this.API_URL).subscribe(courses => {
      let coursesArray = courses as Course[];
      return coursesArray.length + 1;
    });
    return 0;
  }
}
