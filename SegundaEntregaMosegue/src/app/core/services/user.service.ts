import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      idUser: 1,
      firstName: 'Emanuel',
      lastName: 'Mosegue',
      username: 'emamosegue',
      password: '1234',
      email: 'emanuelmosegue@hotmail.com',
      phone: '+5492995329567',
      bornDate: new Date(1991, 8, 10),
      gender: 1,
      profileType: 1,
      profileImage: undefined,
      accountType: [1],
      isAdministrator: true,
    },
    {
      idUser: 2,
      firstName: 'Elda',
      lastName: 'Guero',
      username: 'mcardenas',
      password: 'asd123',
      email: 'marciacardenas@hotmail.com',
      phone: '+5492995987721',
      bornDate: new Date(1989, 8, 11),
      gender: 2,
      profileType: 2,
      profileImage: undefined,
      accountType: [2],
      isAdministrator: false,
    },
    {
      idUser: 3,
      firstName: 'Shillien',
      lastName: 'Knight',
      username: 'bestsk',
      password: 'asdd',
      email: 'lineage2@hotmail.com',
      phone: '+5492995982312',
      bornDate: new Date(1992, 8, 11),
      gender: 0,
      profileType: 0,
      profileImage: undefined,
      accountType: [2],
      isAdministrator: false,
    },
    {
      idUser: 4,
      firstName: 'Elven',
      lastName: 'Elder',
      username: 'bestee',
      password: 'asdd123',
      email: 'bestee@hotmail.com',
      phone: '+5492995982312',
      bornDate: new Date(1992, 8, 12),
      gender: 0,
      profileType: 0,
      profileImage: undefined,
      accountType: [2],
      isAdministrator: false,
    },
    {
      idUser: 5,
      firstName: 'Sorcerer',
      lastName: 'Mage',
      username: 'bestsor',
      password: 'asdd1234',
      email: 'bestee@hotmail.com',
      phone: '+5492995982312',
      bornDate: new Date(1992, 8, 12),
      gender: 0,
      profileType: 0,
      profileImage: undefined,
      accountType: [2],
      isAdministrator: false,
    },
    {
      idUser: 6,
      firstName: 'Rooster',
      lastName: 'Templar',
      username: 'motherofmati',
      password: 'asdd1234',
      email: 'bestee@hotmail.com',
      phone: '+5492995982312',
      bornDate: new Date(1990, 6, 10),
      gender: 0,
      profileType: 0,
      profileImage: undefined,
      accountType: [2],
      isAdministrator: false,
    },
  ];
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(
    this.users
  );

  constructor() {}

  getUser(): User[] {
    return this.users;
  }

  getStudents$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  getStudentsObservableFiltered(): Observable<User[]> {
    return this.users$.pipe(
      map(users => users.filter(user => user.accountType.includes(2)))
    );
  }

  deleteUser(idUser: number) {
    this.users.splice(
      this.users.findIndex(c => c.idUser === idUser),
      1
    );
    this.users$.next(this.users);
  }

  //indico a traves del subject que se genero un nuevo evento.
  addUser(newUser: User) {
    this.users.push(newUser);
    this.users$.next(this.users);
  }

  modifyUser(modifiedUser: User) {
    this.users[this.users.findIndex(c => c.idUser === modifiedUser.idUser)] =
      modifiedUser;
    this.users$.next(this.users);
  }

  getNewId() {
    return this.users.length + 1;
  }
}
