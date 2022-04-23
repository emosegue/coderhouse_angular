import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './directives/font-size.directive';
import { ConcatPipe } from './pipes/concat.pipe';
import { DurationInWeeksPipe } from './pipes/duration-in-weeks.pipe';

@NgModule({
  declarations: [FontSizeDirective, ConcatPipe, DurationInWeeksPipe],
  imports: [CommonModule],
  exports: [FontSizeDirective, ConcatPipe, DurationInWeeksPipe],
})
export class SharedModule {}
