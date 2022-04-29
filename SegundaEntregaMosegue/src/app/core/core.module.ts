import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InscriptionService } from './services/inscription.service';
import { CourseService } from './services/course.service';
import { SharedModule } from '../shared/shared.module';
import { HelpComponent } from './help/help.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent, PageNotFoundComponent, HelpComponent],
  providers: [
    UserService,
    InscriptionService,
    CourseService,
    AuthenticationService,
  ],
})
export class CoreModule {}
