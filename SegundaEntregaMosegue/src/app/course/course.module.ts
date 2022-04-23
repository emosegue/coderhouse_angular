import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CourseService } from '../core/services/course.service';

@NgModule({
  declarations: [CourseListComponent, CourseDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    CourseRoutingModule,
  ],
  providers: [CourseService],
})
export class CourseModule {}
