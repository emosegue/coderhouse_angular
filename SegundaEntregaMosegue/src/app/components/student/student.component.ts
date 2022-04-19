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
  users$!: Observable<User[]>;
  users: User[] = [];
  subscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    public iziToast: Ng2IzitoastService
  ) {}

  ngOnInit(): void {
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
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(result: any) {
    let newUser = {} as User;
    newUser.idUser = this.userService.getNewId();
    newUser.username = 'genericUsername';
    newUser.password = 'genericPassword';
    newUser.firstName = result.firstName;
    newUser.lastName = result.lastName;
    newUser.email = result.email;
    newUser.bornDate = result.bornDate;
    newUser.gender = result.gender;
    this.userService.addUser(newUser);
    this.table?.renderRows();
    this.showIziToast(
      `El alumno ${result.firstName} ${result.lastName} se cargo correctamente`
    );
  }

  updateRowData(result: any) {
    this.userService.modifyUser(result);
    this.table?.renderRows();
    this.showIziToast(
      `El alumno ${result.firstName} ${result.lastName} se ha actualizado `
    );
  }

  deleteRowData(result: any) {
    this.userService.deleteUser(result.idUser);
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
