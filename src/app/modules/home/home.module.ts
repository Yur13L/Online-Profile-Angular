import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home/page-home.component';
import { AreaWorkComponent } from './area-work/area-work.component';
import { AreaContactComponent } from './area-contact/area-contact.component';
import { AreaPersonSummaryComponent } from './area-person-summary/area-person-summary.component';
import { AreaSkillsComponent } from './area-skills/area-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ModalWorkExperienceComponent } from './modal-work-experience/modal-work-experience.component';


@NgModule({
  declarations: [
    PageHomeComponent,
    AreaWorkComponent,
    AreaContactComponent,
    AreaPersonSummaryComponent,
    AreaSkillsComponent,
    ModalWorkExperienceComponent
  ],
  exports: [
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
    })
  ]
})
export class HomeModule { }
