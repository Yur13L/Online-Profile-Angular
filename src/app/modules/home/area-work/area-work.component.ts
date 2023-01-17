import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/shared/models/company.data';
import { CompanyService } from 'src/app/shared/services/Company/company.service';
import { WorkExperienceService } from 'src/app/shared/services/WorkExperience/work-experience.service';
import { WorkExperience } from 'src/app/shared/models/work-experience.data';
import { ModalWorkExperienceComponent } from '../modal-work-experience/modal-work-experience.component';

@Component({
  selector: 'app-area-work',
  templateUrl: './area-work.component.html',
  styleUrls: ['./area-work.component.css']
})
export class AreaWorkComponent implements OnInit {

  public cardCompanyDetailList?:Company[];
  public modalWorkExperience?:WorkExperience;
  private workExperienceList?:WorkExperience[];

  @ViewChild("workexperiencemodal")
  private workExperienceModal?:ModalWorkExperienceComponent;

  constructor(private companyService : CompanyService,
              private workExperienceService : WorkExperienceService) {
  }

  ngOnInit() {
    this.fetchCompanyDetailList();
    this.fetchWorkExperienceList();
  }

  public displayModalWorkExperienceByCompany(companyItem:Company) {
    let foundItem = this.workExperienceList?.find( item => item.id == companyItem.id);
    this.workExperienceModal?.openModal(foundItem);
  }

  private fetchWorkExperienceList(){
    this.workExperienceService.getWorkExperienceAll().subscribe( workExpList => {
      this.workExperienceList = workExpList;
    });
  }

  private fetchCompanyDetailList(){
    this.companyService.getCompanyAll().subscribe((response) => {
      this.cardCompanyDetailList = response;
    });
  }

}