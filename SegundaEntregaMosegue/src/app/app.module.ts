import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';
import { UserService } from './core/services/user.service';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentModule } from './student/student.module';
import { StudentRoutingModule } from './student/student-routing.module';
import { CourseModule } from './course/course.module';
import { CourseRoutingModule } from './course/course-routing.module';
import { CourseService } from './core/services/course.service';
import { InscriptionService } from './core/services/inscription.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    Ng2IziToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    CourseModule,
    CourseRoutingModule,
  ],
  providers: [UserService, CourseService, InscriptionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
