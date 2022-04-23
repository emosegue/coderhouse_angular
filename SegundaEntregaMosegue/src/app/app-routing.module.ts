import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { InscriptionListComponent } from './inscription/inscription-list/inscription-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: 'alumnos',
    component: StudentListComponent,
    loadChildren: () =>
      import('./student/student.module').then(m => m.StudentModule),
  },
  {
    path: 'cursos',
    component: CourseListComponent,
    loadChildren: () =>
      import('./course/course.module').then(m => m.CourseModule),
  },
  {
    path: 'inscripciones',
    component: InscriptionListComponent,
    loadChildren: () =>
      import('./inscription/inscription.module').then(m => m.InscriptionModule),
  },
  { path: 'alumnos/:id', component: StudentDetailComponent },
  { path: 'cursos/:id', component: CourseDetailComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
