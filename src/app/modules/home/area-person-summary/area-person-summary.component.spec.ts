import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPersonSummaryComponent } from './area-person-summary.component';

describe('AreaPersonSummaryComponent', () => {
  let component: AreaPersonSummaryComponent;
  let fixture: ComponentFixture<AreaPersonSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaPersonSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaPersonSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
