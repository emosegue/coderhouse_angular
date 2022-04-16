import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { UserService } from '../../services/user.service';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/entities/user';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Observable, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'idUser',
    'fullName',
    'bornDate',
    'gender',
    'email',
    'action',
  ];
  @ViewChild(MatTable, { static: true }) table?: MatTable<any>;
  usersFiltered$!: Observable<User[]>;
  usersPromise!: Promise<any>;
  users: User[] = [];
  usersOb: User[] = [];
  usersFilteredOb: User[] = [];
  subscription!: Subscription;
  notificador = new Subject();

  ngOnInit(): void {
    //section for subscription
    this.subscription = this.UserService.getStudentsObservable().subscribe({
      next: users => (this.usersOb = users),
    });

    //section for data filtered
    this.usersFiltered$ = this.UserService.getStudentsObservableFiltered();
    this.usersFiltered$.subscribe({
      next: users => (this.usersFilteredOb = users),
    });

    //section for Promise
    this.usersPromise = this.UserService.getStudentsPromise();
    this.usersPromise
      .then(users => {
        this.users = users;
      })
      .catch(error => {
        console.error(error);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.notificador.next(0);
    this.notificador.complete();
  }

  constructor(
    private dialog: MatDialog,
    private UserService: UserService,
    public iziToast: Ng2IzitoastService
  ) {}

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

    const dialogRef = this.dialog.open(StudentDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(result: any) {
    this.UserService.addUser(
      new User(
        this.UserService.getNewId(),
        'genericUsername',
        'genericPassword',
        result.firstName,
        result.lastName,
        result.email,
        new Date(1995, 8, 10),
        result.gender
      )
    );
    this.table?.renderRows();
    this.showIziToast(
      `El alumno ${result.firstName} ${result.lastName} se cargo correctamente`
    );
  }

  updateRowData(result: any) {
    this.UserService.modifyUser(result);
    this.table?.renderRows();
    this.showIziToast(
      `El alumno ${result.firstName} ${result.lastName} se ha actualizado `
    );
    console.log(this.UserService.users);
  }

  deleteRowData(result: any) {
    this.UserService.deleteUser(result.idUser);
    this.table?.renderRows();
    this.showIziToast(
      `El alumno ${result.firstName} ${result.lastName} se elimino`
    );
  }

  showIziToast(itMsg: string) {
    this.iziToast.show({
      title: itMsg,
      timeout: 2000,
      color: 'green',
      position: 'topCenter',
    });
  }
}
