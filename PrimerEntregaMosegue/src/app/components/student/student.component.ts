import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { UserService } from '../../services/user.service';
import { MatTable } from '@angular/material/table';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table?: MatTable<any>;

  displayedColumns: string[] = [
    'idUser',
    'fullName',
    'bornDate',
    'gender',
    'email',
    'action',
  ];
  users: any = [];

  constructor(private dialog: MatDialog, private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.getObservable().subscribe(users => {
      this.users = users;
    });
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
  }

  updateRowData(result: any) {
    this.UserService.modifyUser(result);
    this.table?.renderRows();
  }

  deleteRowData(user: any) {
    this.UserService.deleteUser(user.idUser);
    this.table?.renderRows();
  }
}
