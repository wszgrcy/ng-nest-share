import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorComponent } from './decorator.component';

@NgModule({
  declarations: [DecoratorComponent],
  imports: [CommonModule],
  exports: [DecoratorComponent],
})
export class DecoratorModule {}
