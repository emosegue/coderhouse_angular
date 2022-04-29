import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, catchError, throwError, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUser = {} as User;
  private currentUserSubject = new BehaviorSubject<User>(this.currentUser);

  private AUTH_URL = 'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/users';

  constructor(private httpClient: HttpClient, private router: Router) {}

  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentUser$(): Observable<User> {
    return this.currentUserSubject.asObservable();
  }

  isLogged() {
    return Object.keys(this.currentUser).length !== 0;
  }

  saveLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.get<User[]>(this.AUTH_URL).pipe(
      catchError(error => this.errorHandler(error)),
      map(users =>
        users.filter(user => {
          if (user.username == username && user.password == password) {
            this.currentUser = user;
            this.saveLocalStorage(user);
            this.currentUserSubject.next(user);
            this.router.navigate(['/']);
          }
        })
      )
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next({} as User);
    this.router.navigate(['/login']);
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
