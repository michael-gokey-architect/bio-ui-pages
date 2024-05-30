import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C05cEventLandingComponent } from './c05c-event-landing.component';

describe('C05cEventLandingComponent', () => {
  let component: C05cEventLandingComponent;
  let fixture: ComponentFixture<C05cEventLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C05cEventLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C05cEventLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
