import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './directives/font-size.directive';
import { ConcatPipe } from './pipes/concat.pipe';
import { DurationInWeeksPipe } from './pipes/duration-in-weeks.pipe';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  declarations: [FontSizeDirective, ConcatPipe, DurationInWeeksPipe],
  imports: [CommonModule],
  exports: [
    FontSizeDirective,
    ConcatPipe,
    DurationInWeeksPipe,
    MaterialModule,
    ReactiveFormsModule,
    Ng2IziToastModule,
  ],
})
export class SharedModule {}
