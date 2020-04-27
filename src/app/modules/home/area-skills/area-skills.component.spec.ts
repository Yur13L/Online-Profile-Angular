import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSkillsComponent } from './area-skills.component';
import { CircleProgressComponent } from 'ng-circle-progress';


describe('AreaSkillsComponent', () => {
  let component: AreaSkillsComponent;
  let fixture: ComponentFixture<AreaSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSkillsComponent,
                      CircleProgressComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
