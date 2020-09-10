import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CyiaRepositoryModule } from 'cyia-ngx-common/repository';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CyiaRepositoryModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
