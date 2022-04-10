import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css'],
})
export class StudentDialogComponent implements OnInit {
  action: string | undefined;
  local_data: any;
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[- +()0-9]+'),
    ]),
    bornDate: new FormControl(''),
    gender: new FormControl(''),
    profileType: new FormControl(''),
    profileImage: new FormControl(''),
    accountType: new FormControl(''),
    isAdministrator: new FormControl(''),
  });

  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      idUser: this.local_data.idUser,
      username: this.local_data.username,
      password: this.local_data.password,
      firstName: this.local_data.firstName,
      lastName: this.local_data.lastName,
      email: this.local_data.email,
      phone: this.local_data.phone,
      bornDate: this.local_data.bornDate,
      gender: this.local_data.gender,
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

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
