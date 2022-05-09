import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { CourseService } from '../core/services/course.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  declarations: [CourseListComponent, CourseDialogComponent, CourseDetailComponent],
  imports: [CommonModule, SharedModule, CourseRoutingModule],
  providers: [CourseService],
})
export class CourseModule {}
