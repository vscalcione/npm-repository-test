import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FbLibraryModule } from 'fb-library-test-npm';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FbLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
