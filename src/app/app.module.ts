import { BelatrixTableComponent } from './../components/belatrix-table/belatrix-table.component';
import { UploadComponent } from './../components/upload/upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    BelatrixTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
