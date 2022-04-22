import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { InscriptionListComponent } from './inscription/inscription-list/inscription-list.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: 'alumnos', component: StudentListComponent },
  { path: 'cursos', component: CourseListComponent },
  { path: 'inscripciones', component: InscriptionListComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
