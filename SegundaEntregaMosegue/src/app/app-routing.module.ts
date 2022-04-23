import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { InscriptionListComponent } from './inscription/inscription-list/inscription-list.component';

const routes: Routes = [
  //standard routing
  // {
  //   path: 'alumnos',
  //   component: StudentListComponent,
  // },
  // {
  //   path: 'cursos',
  //   component: CourseListComponent,
  // },
  // {
  //   path: 'inscripciones',
  //   component: InscriptionListComponent,
  // },
  //lazy loading
  {
    path: 'alumnos',
    loadChildren: () =>
      import('./student/student.module').then(m => m.StudentModule),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./course/course.module').then(m => m.CourseModule),
  },
  {
    path: 'inscripciones',
    loadChildren: () =>
      import('./inscription/inscription.module').then(m => m.InscriptionModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
