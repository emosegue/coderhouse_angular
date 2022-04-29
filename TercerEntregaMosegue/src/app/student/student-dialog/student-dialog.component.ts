import { Component, Inject, Optional } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css'],
})
export class StudentDialogComponent {
  action: string | undefined;
  local_data: any;
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.registerForm = this.fb.group({
      idUser: new FormControl(data.idUser),
      firstName: new FormControl(data.firstName, [
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required,
      ]),
      lastName: new FormControl(data.lastName, [
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required,
      ]),
      email: new FormControl(data.email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(data.phone),
      bornDate: new FormControl(data.bornDate),
      gender: new FormControl(data.gender),
    });
  }

  doAction() {
    if (this.action != 'Delete') {
      this.local_data = {
        idUser: this.registerForm.value['idUser'],
        firstName: this.registerForm.value['firstName'],
        lastName: this.registerForm.value['lastName'],
        bornDate: this.registerForm.value['bornDate'],
        gender: this.registerForm.value['gender'],
        email: this.registerForm.value['email'],
      };
    }
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
