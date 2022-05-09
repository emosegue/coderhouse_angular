import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionListComponent } from './inscription-list/inscription-list.component';
import { InscriptionDetailComponent } from './inscription-detail/inscription-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: InscriptionListComponent },
      { path: 'details/:id', component: InscriptionDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionRoutingModule {}
