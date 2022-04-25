import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit, Optional, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/models/user.model';
import { UserService } from '../../core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
})
export class CourseDialogComponent implements OnInit, OnDestroy {
  action: string | undefined;
  local_data: any;
  registerForm: FormGroup;
  professors: User[] = [];
  subscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private UserService: UserService
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.registerForm = this.fb.group({
      idCourse: new FormControl(data.idCourse),
      name: new FormControl(data.name, [
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required,
      ]),
      startDate: new FormControl(data.startDate, Validators.required),
      endDate: new FormControl(data.endDate, Validators.required),
      amountHours: new FormControl(data.amountHours, Validators.required),
      professor: new FormControl(data.professor.idUser, Validators.required),
    });
  }
  ngOnDestroy() {
    this.subscription!.unsubscribe();
  }

  ngOnInit() {
    this.subscription! = this.UserService.getProfessors$().subscribe(
      professors => {
        this.professors = professors;
      }
    );
  }

  doAction() {
    if (this.action != 'Delete') {
      this.local_data = {
        idCourse: this.registerForm.value['idCourse'],
        name: this.registerForm.value['name'],
        startDate: this.registerForm.value['startDate'],
        endDate: this.registerForm.value['endDate'],
        amountHours: this.registerForm.value['amountHours'],
        professor:
          this.professors[
            this.professors.findIndex(
              user => user.idUser === this.registerForm.value['professor']
            )
          ],
      };
    }
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
