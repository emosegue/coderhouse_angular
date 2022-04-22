import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionListComponent } from './inscription-list/inscription-list.component';
import { InscriptionDialogComponent } from './inscription-dialog/inscription-dialog.component';


@NgModule({
  declarations: [
    InscriptionListComponent,
    InscriptionDialogComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule
  ]
})
export class InscriptionModule { }
