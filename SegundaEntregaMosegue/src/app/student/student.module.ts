import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { UserService } from '../core/services/user.service';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [StudentListComponent, StudentDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    StudentRoutingModule,
  ],
  providers: [UserService],
})
export class StudentModule {}
