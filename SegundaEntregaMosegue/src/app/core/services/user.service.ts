import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/users';

  constructor(private httpClient: HttpClient) {}

  getStudents$(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.usersUrl)
      .pipe(map(users => users.filter(user => user.accountType.includes(2))));
  }

  getProfessors$(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.usersUrl)
      .pipe(map(users => users.filter(user => user.accountType.includes(1))));
  }

  getStudentById$(idStudent: number): Observable<User> {
    return this.httpClient.get<User>(`${this.usersUrl}/${idStudent}`);
  }

  deleteUser(idUser: number): Observable<any> {
    return this.httpClient.delete(`${this.usersUrl}/${idUser}`);
  }

  //indico a traves del subject que se genero un nuevo evento.
  addUser(newUser: User): Observable<any> {
    return this.httpClient.post(`${this.usersUrl}`, newUser);
  }

  updateUser(modifiedUser: User): Observable<any> {
    return this.httpClient.put(
      `${this.usersUrl}/${modifiedUser.idUser}`,
      modifiedUser
    );
  }

  getNewId() {
    this.httpClient.get(this.usersUrl).subscribe(users => {
      let usersArray = users as User[];
      return usersArray.length + 1;
    });
    return 0;
  }
}
