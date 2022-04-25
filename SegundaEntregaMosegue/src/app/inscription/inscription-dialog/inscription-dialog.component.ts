import { Component, Inject, Optional, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/core/models/course.model';
import { User } from 'src/app/core/models/user.model';
import { CourseService } from '../../core/services/course.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrls: ['./inscription-dialog.component.css'],
})
export class InscriptionDialogComponent implements OnInit, OnDestroy {
  action: string | undefined;
  local_data: any;
  registerForm: FormGroup;
  students: User[] = [];
  courses: Course[] = [];
  subscriptionCourses!: Subscription;
  subscriptionStudents!: Subscription;

  constructor(
    private userService: UserService,
    private courseService: CourseService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InscriptionDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.registerForm = this.fb.group({
      idInscription: new FormControl(data.idInscription),
      student: new FormControl(
        data.student ? data.student.idUser : '',
        Validators.required
      ),
      course: new FormControl(
        data.course ? data.course.idCourse : '',
        Validators.required
      ),
      transactionDate: new FormControl(data.transactionDate),
      transactionUser: new FormControl(data.transactionDate),
    });
  }

  ngOnDestroy() {
    this.subscriptionCourses!.unsubscribe();
    this.subscriptionStudents!.unsubscribe();
  }

  ngOnInit() {
    this.subscriptionStudents! = this.userService
      .getStudents$()
      .subscribe(students => {
        this.students = students;
      });

    this.subscriptionCourses! = this.courseService
      .getCourses$()
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  doAction() {
    if (this.action != 'Delete') {
      this.local_data = {
        idInscription: this.registerForm.value['idInscription'],
        // student: this.registerForm.value['student'],
        // course: this.registerForm.value['course'],
        student:
          this.students[
            this.students.findIndex(
              user => user.idUser === this.registerForm.value['student']
            )
          ],
        course:
          this.courses[
            this.courses.findIndex(
              course => course.idCourse === this.registerForm.value['course']
            )
          ],
        transactionDate: this.registerForm.value['transactionDate'],
        transactionUser: this.registerForm.value['transactionUser'],
      };
    }
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
