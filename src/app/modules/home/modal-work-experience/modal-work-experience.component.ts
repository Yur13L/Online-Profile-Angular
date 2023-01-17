import { Component, OnInit, ViewChildren, ElementRef, ViewChild, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkExperience } from '../../../shared/models/work-experience.data';

@Component({
  selector: 'app-modal-work-experience',
  templateUrl: './modal-work-experience.component.html'
})
export class ModalWorkExperienceComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  @ViewChild('content') 
  private myLis?: ElementRef;

  @Input()
  public workExperienceData?:WorkExperience;

  ngOnInit(): void {
  }

  public openModal(neworkExperienceData?:WorkExperience) {
    this.workExperienceData = neworkExperienceData;
    this.modalService.open(this.myLis, {
      size:"lg"
    });
  }

}
