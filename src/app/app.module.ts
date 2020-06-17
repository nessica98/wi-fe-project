import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReleasepageComponent } from './components/releasepage/releasepage.component';
import { CountdownpageComponent } from './components/countdownpage/countdownpage.component';
import { MemberpageComponent } from './components/memberpage/memberpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleasepageComponent,
    CountdownpageComponent,
    MemberpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  title: String = 'Weki Meki comeback 18 June'
}
