import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { UserService } from '../core/services/user.service';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDialogComponent,
    StudentDetailComponent,
  ],
  imports: [CommonModule, SharedModule, StudentRoutingModule],
  providers: [UserService],
})
export class StudentModule {}
