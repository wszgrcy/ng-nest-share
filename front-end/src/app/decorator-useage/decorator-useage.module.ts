import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorUseageComponent } from './decorator-useage.component';

@NgModule({
  declarations: [DecoratorUseageComponent],
  imports: [CommonModule],
  exports: [DecoratorUseageComponent],
})
export class DecoratorUseageModule {}
