import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeComponent } from './page-home.component';
import { AreaPersonSummaryComponent } from 'src/app/modules/home/area-person-summary/area-person-summary.component';
import { AreaWorkComponent } from 'src/app/modules/home/area-work/area-work.component';
import { AreaContactComponent } from 'src/app/modules/home/area-contact/area-contact.component';
import { AreaSkillsComponent } from 'src/app/modules/home/area-skills/area-skills.component';


describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
                      PageHomeComponent,
                      AreaPersonSummaryComponent,
                      AreaWorkComponent,
                      AreaContactComponent,
                      AreaSkillsComponent
                    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
