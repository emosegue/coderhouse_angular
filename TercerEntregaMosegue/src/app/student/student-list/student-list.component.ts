import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { UserService } from '../../core/services/user.service';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'idUser',
    'fullName',
    'bornDate',
    'gender',
    'email',
    'action',
  ];

  @ViewChild(MatTable, { static: true }) table?: MatTable<any>;
  users$!: Observable<User[]>;
  users: User[] = [];
  subscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    public iziToast: Ng2IzitoastService
  ) {}

  ngOnInit(): void {
    //this.userService.getUsers().subscribe(data => (this.users = data));
    this.users$ = this.userService.getStudents$();
    this.subscription! = this.users$.subscribe(users => (this.users = users));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
        this.addUser(result.data);
      } else if (result.event == 'Update') {
        this.updateUser(result.data);
      } else if (result.event == 'Delete') {
        this.deleteUser(result.data);
      }
    });
  }

  addUser(result: any) {
    let newUser = {} as User;
    newUser.idUser = this.userService.getNewId();
    newUser.username = 'genericUsername';
    newUser.password = 'genericPassword';
    newUser.firstName = result.firstName;
    newUser.lastName = result.lastName;
    newUser.email = result.email;
    newUser.bornDate = result.bornDate;
    newUser.gender = result.gender;
    this.userService.addUser(newUser).subscribe(user => {
      this.users.push(user);
      this.table?.renderRows();
      this.showIziToast(
        `El alumno ${result.firstName} ${result.lastName} se cargo correctamente`
      );
    });
  }

  updateUser(result: any) {
    this.userService.updateUser(result).subscribe(user => {
      this.users[this.users.findIndex(c => c.idUser === result.idUser)] =
        result;
      this.table?.renderRows();
      this.showIziToast(
        `El alumno ${result.firstName} ${result.lastName} se ha actualizado `
      );
    });
  }

  deleteUser(result: any): void {
    this.userService.deleteUser(result.idUser).subscribe({
      next: deletedUser => {
        this.users = this.users.filter(
          user => user.idUser !== deletedUser.idUser
        );
        this.table?.renderRows();
        this.showIziToast(
          `El alumno ${result.firstName} ${result.lastName} se elimino`
        );
      },
      error: error => {
        console.error('No se pudo eliminar el usuario', error);
      },
    });
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
