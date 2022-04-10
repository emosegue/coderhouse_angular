import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userObservable: Observable<User[]>;
  private userSubject: Subject<User[]>;
  users: User[] = [
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

  constructor() {
    this.userSubject = new Subject();
    this.userObservable = new Observable(suscription =>
      suscription.next(this.users)
    );
  }

  getUsers() {
    return this.users;
  }

  getObservable() {
    return this.userObservable;
  }

  deleteUser(idUser: number) {
    this.users.splice(
      this.users.findIndex(c => c.idUser === idUser),
      1
    );
  }

  addUser(newUser: User) {
    this.users.push(newUser);
    return this.users;
  }

  modifyUser(modifiedUser: User) {
    console.log(modifiedUser);
    this.users[this.users.findIndex(c => c.idUser === modifiedUser.idUser)] =
      modifiedUser;
  }

  getNewId() {
    return this.users.length + 1;
  }
}
