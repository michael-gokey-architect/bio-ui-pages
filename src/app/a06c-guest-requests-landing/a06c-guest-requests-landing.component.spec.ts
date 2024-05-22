import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A06cGuestRequestsLandingComponent } from './a06c-guest-requests-landing.component';

describe('A06cGuestRequestsLandingComponent', () => {
  let component: A06cGuestRequestsLandingComponent;
  let fixture: ComponentFixture<A06cGuestRequestsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A06cGuestRequestsLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A06cGuestRequestsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
