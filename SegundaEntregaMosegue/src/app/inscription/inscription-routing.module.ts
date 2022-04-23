import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionListComponent } from './inscription-list/inscription-list.component';

const routes: Routes = [
  { path: 'inscripciones', component: InscriptionListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionRoutingModule {}
