import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CyiaRepositoryModule } from 'cyia-ngx-common/repository';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { DecoratorModule } from './decorator/decorator.module';
import { DecoratorUseageModule } from './decorator-useage/decorator-useage.module';
import { DecoratorExtendsModule } from './decorator-extends/decorator-extends.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CyiaRepositoryModule,
    FormsModule,
    DecoratorModule,
    DecoratorUseageModule,
    DecoratorExtendsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}

class Test {}
