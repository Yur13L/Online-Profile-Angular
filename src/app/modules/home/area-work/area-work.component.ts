import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/models/company.data';
import { CompanyService } from 'src/app/shared/services/Company/company.service';
import { WorkExperienceService } from 'src/app/shared/services/WorkExperience/work-experience.service';
import { WorkExperience } from 'src/app/shared/models/work-experience.data';

@Component({
  selector: 'app-area-work',
  templateUrl: './area-work.component.html',
  styleUrls: ['./area-work.component.css']
})
export class AreaWorkComponent implements OnInit {

  public cardCompanyDetailList:Company[] = [];
  public modalWorkExperience:WorkExperience;
  public modalCompany:Company;

  constructor(private companyService : CompanyService,
              private workExperienceService : WorkExperienceService) {
  }

  ngOnInit() {
    this.companyService.getCompanyAll().subscribe((response:Company[]) => {
      this.cardCompanyDetailList = response;
    });
  }

  public displayModalWorkExperienceByCompany(companyItem:Company) {
    this.modalCompany = companyItem;
    this.workExperienceService.getWorkExperienceByCompanyId(companyItem.id).subscribe((response:WorkExperience) => {
      this.modalWorkExperience = response;
    });
  }

}