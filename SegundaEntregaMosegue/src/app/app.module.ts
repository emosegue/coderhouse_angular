import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';

import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './components/course/course.component';
import { UserService } from './core/services/user.service';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InscriptionComponent } from './components/inscription/inscription.component'; //<-- this line
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    CourseComponent,
    StudentDialogComponent,
    HomeComponent,
    PageNotFoundComponent,
    InscriptionComponent,
  ],
  imports: [
    Ng2IziToastModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [StudentComponent],
})
export class AppModule {}
