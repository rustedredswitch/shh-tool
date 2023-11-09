import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PerformanceBarComponent} from "./components/performance-bar/performance-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    PerformanceBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
