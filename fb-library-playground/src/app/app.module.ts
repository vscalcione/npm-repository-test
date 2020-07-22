import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FbLibraryModule } from '../../projects/fb-library/src/lib/fb-library.module';
// import { FbLibraryModule } from 'fb-library';

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
