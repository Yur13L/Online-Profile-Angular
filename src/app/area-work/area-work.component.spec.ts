import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWorkComponent } from './area-work.component';

describe('AreaWorkComponent', () => {
  let component: AreaWorkComponent;
  let fixture: ComponentFixture<AreaWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
