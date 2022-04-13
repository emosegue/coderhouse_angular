import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';

import { MaterialModule } from './modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './components/course/course.component';
import { UserService } from './services/user.service';
import { ConcatPipe } from './pipes/concatpipe';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FontSizeDirective } from './directives/font-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    CourseComponent,
    ConcatPipe,
    StudentDialogComponent,
    FontSizeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [StudentComponent],
})
export class AppModule {}
