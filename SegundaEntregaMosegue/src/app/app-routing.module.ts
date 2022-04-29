import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { InscriptionListComponent } from './inscription/inscription-list/inscription-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { InscriptionDetailComponent } from './inscription/inscription-detail/inscription-detail.component';
import { AuthModule } from './auth/auth.module';
import { HelpComponent } from './core/help/help.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'alumnos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./student/student.module').then(m => m.StudentModule),
  },
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./course/course.module').then(m => m.CourseModule),
  },
  {
    path: 'inscripciones',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./inscription/inscription.module').then(m => m.InscriptionModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: 'ayuda', component: HelpComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
