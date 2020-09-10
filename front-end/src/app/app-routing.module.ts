import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoratorComponent } from './decorator/decorator.component';
import { DecoratorUseageComponent } from './decorator-useage/decorator-useage.component';
import { DecoratorExtendsComponent } from './decorator-extends/decorator-extends.component';

const routes: Routes = [
  { path: 'decorator', component: DecoratorComponent },
  { path: 'decorator-useage', component: DecoratorUseageComponent },
  { path: 'decorator-extends', component: DecoratorExtendsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
