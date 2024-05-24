import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A06c1GuestRequestsLandingSwipeRightComponent } from './a06c1-guest-requests-landing-swipe-right.component';

describe('A06c1GuestRequestsLandingSwipeRightComponent', () => {
  let component: A06c1GuestRequestsLandingSwipeRightComponent;
  let fixture: ComponentFixture<A06c1GuestRequestsLandingSwipeRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A06c1GuestRequestsLandingSwipeRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A06c1GuestRequestsLandingSwipeRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
