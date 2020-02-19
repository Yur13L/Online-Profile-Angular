import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { AreaWorkComponent } from './area-work/area-work.component';
import { AreaContactComponent } from './area-contact/area-contact.component';
import { AreaPersonSummaryComponent } from './area-person-summary/area-person-summary.component';
import { AreaSkillsComponent } from './area-skills/area-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    AreaWorkComponent,
    AreaContactComponent,
    AreaPersonSummaryComponent,
    AreaSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
