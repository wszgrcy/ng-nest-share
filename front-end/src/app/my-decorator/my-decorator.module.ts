import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDecoratorComponent } from './my-decorator.component';
import { FormsModule } from '@angular/forms';
import { CyiaLoadingHintModule } from 'cyia-ngx-common/loading-hint';
import { LoadingShowModule } from '../loading-show/loading-show.module';

@NgModule({
  imports: [CommonModule, FormsModule, LoadingShowModule, CyiaLoadingHintModule],
  declarations: [MyDecoratorComponent],
  providers: [],
})
export class MyDecoratorModule {}
