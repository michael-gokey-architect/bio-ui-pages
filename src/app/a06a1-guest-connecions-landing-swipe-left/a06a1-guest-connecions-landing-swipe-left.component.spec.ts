import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A06a1GuestConnecionsLandingSwipeLeftComponent } from './a06a1-guest-connecions-landing-swipe-left.component';

describe('A06a1GuestConnecionsLandingSwipeLeftComponent', () => {
  let component: A06a1GuestConnecionsLandingSwipeLeftComponent;
  let fixture: ComponentFixture<A06a1GuestConnecionsLandingSwipeLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A06a1GuestConnecionsLandingSwipeLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A06a1GuestConnecionsLandingSwipeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
