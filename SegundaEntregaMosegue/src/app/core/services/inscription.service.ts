import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../models/course.model';
import { Inscription } from '../models/inscription.model';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  private API_URL =
    'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/inscriptions';

  constructor(private httpClient: HttpClient) {}

  getInscriptions$(): Observable<Inscription[]> {
    return this.httpClient.get<Inscription[]>(this.API_URL);
  }

  getInscriptionById$(idInscription: number): Observable<Inscription> {
    return this.httpClient.get<Inscription>(`${this.API_URL}/${idInscription}`);
  }

  getCoursesByStudent$(idStudent: number): Observable<Inscription[]> {
    return this.httpClient
      .get<Inscription[]>(this.API_URL)
      .pipe(
        map(ins =>
          ins.filter(inscription => inscription.student.idUser == idStudent)
        )
      );
  }

  getStudentsByCourse$(idCourse: number): Observable<Inscription[]> {
    return this.httpClient
      .get<Inscription[]>(this.API_URL)
      .pipe(
        map(ins =>
          ins.filter(inscription => inscription.course.idCourse == idCourse)
        )
      );
  }

  deleteInscription(idInscription: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${idInscription}`);
  }

  //indico a traves del subject que se genero un nuevo evento.
  addInscription(newInscription: Inscription): Observable<any> {
    return this.httpClient.post(`${this.API_URL}`, newInscription);
  }

  updateInscription(modifiedInscription: Inscription): Observable<any> {
    return this.httpClient.put(
      `${this.API_URL}/${modifiedInscription.idInscription}`,
      modifiedInscription
    );
  }

  getNewId() {
    this.httpClient.get(this.API_URL).subscribe(inscriptions => {
      let inscriptionsArray = inscriptions as Inscription[];
      return inscriptionsArray.length + 1;
    });
    return 0;
  }
}
