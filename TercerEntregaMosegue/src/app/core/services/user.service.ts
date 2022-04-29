import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/users';
  private headers = new HttpHeaders({ 'content-type': 'application-json' });

  constructor(private httpClient: HttpClient) {}

  getStudents$(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.API_URL, { headers: this.headers })
      .pipe(
        catchError(this.errorHandler),
        map(users => users.filter(user => user.accountType.includes(2)))
      );
  }

  getProfessors$(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.API_URL)
      .pipe(map(users => users.filter(user => user.accountType.includes(1))));
  }

  getUserById$(idStudent: number): Observable<User> {
    return this.httpClient.get<User>(`${this.API_URL}/${idStudent}`);
  }

  deleteUser(idUser: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${idUser}`);
  }

  //indico a traves del subject que se genero un nuevo evento.
  addUser(newUser: User): Observable<any> {
    return this.httpClient.post(`${this.API_URL}`, newUser);
  }

  updateUser(modifiedUser: User): Observable<any> {
    return this.httpClient.put(
      `${this.API_URL}/${modifiedUser.idUser}`,
      modifiedUser
    );
  }

  getNewId() {
    this.httpClient.get(this.API_URL).subscribe(users => {
      let usersArray = users as User[];
      return usersArray.length + 1;
    });
    return 0;
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.warn('Error en el frontend:', error.error.message);
    } else {
      console.warn('Error en el backend:', error.status, error.message);
    }

    return throwError(() => 'Error de comunicacion HTTP');
  }
}
