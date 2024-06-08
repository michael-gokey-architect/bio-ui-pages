import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A05cGuestRequestsLandingComponent } from './a05c-guest-requests-landing.component';

describe('A05cGuestRequestsLandingComponent', () => {
  let component: A05cGuestRequestsLandingComponent;
  let fixture: ComponentFixture<A05cGuestRequestsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A05cGuestRequestsLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A05cGuestRequestsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
