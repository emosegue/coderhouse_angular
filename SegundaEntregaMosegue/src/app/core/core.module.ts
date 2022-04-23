import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InscriptionService } from './services/inscription.service';
import { CourseService } from './services/course.service';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, PageNotFoundComponent],
  providers: [UserService, InscriptionService, CourseService],
})
export class CoreModule {}
