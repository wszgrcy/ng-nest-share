import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingShowComponent } from './loading-show.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingShowComponent],
  exports: [LoadingShowComponent],
})
export class LoadingShowModule {}
