import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A06c1GuestRequestsLandingSwipeLeftComponent } from './a06c1-guest-requests-landing-swipe-left.component';

describe('A06c1GuestRequestsLandingSwipeLeftComponent', () => {
  let component: A06c1GuestRequestsLandingSwipeLeftComponent;
  let fixture: ComponentFixture<A06c1GuestRequestsLandingSwipeLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A06c1GuestRequestsLandingSwipeLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A06c1GuestRequestsLandingSwipeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
