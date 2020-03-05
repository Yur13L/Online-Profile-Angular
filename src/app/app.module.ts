import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { AreaWorkComponent } from './home/area-work/area-work.component';
import { AreaContactComponent } from './home/area-contact/area-contact.component';
import { AreaPersonSummaryComponent } from './home/area-person-summary/area-person-summary.component';
import { AreaSkillsComponent } from './home/area-skills/area-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

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
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
