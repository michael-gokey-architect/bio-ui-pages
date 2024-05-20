import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A05bGuestPublicLandingComponent } from './a05b-guest-public-landing.component';

describe('A05bGuestPublicLandingComponent', () => {
  let component: A05bGuestPublicLandingComponent;
  let fixture: ComponentFixture<A05bGuestPublicLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A05bGuestPublicLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A05bGuestPublicLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
