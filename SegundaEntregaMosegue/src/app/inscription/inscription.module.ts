import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionListComponent } from './inscription-list/inscription-list.component';
import { InscriptionDialogComponent } from './inscription-dialog/inscription-dialog.component';
import { InscriptionService } from '../core/services/inscription.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InscriptionListComponent, InscriptionDialogComponent],
  imports: [SharedModule, CommonModule, InscriptionRoutingModule],
  providers: [InscriptionService],
})
export class InscriptionModule {}
