import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PerformanceBarComponent} from "./components/performance-bar/performance-bar.component";
import {SftpSpaceComponent} from './components/sftp-space/sftp-space.component';
import {SshSpaceComponent} from './components/ssh-space/ssh-space.component';

@NgModule({
  declarations: [
    AppComponent,
    PerformanceBarComponent,
    SftpSpaceComponent,
    SshSpaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
