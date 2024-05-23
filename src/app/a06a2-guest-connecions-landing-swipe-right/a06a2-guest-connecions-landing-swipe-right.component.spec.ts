import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A06a2GuestConnecionsLandingSwipeRightComponent } from './a06a2-guest-connecions-landing-swipe-right.component';

describe('A06a2GuestConnecionsLandingSwipeRightComponent', () => {
  let component: A06a2GuestConnecionsLandingSwipeRightComponent;
  let fixture: ComponentFixture<A06a2GuestConnecionsLandingSwipeRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A06a2GuestConnecionsLandingSwipeRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A06a2GuestConnecionsLandingSwipeRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
