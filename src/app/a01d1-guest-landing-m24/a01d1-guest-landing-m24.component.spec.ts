import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01d1GuestLandingM24Component } from './a01d1-guest-landing-m24.component';

describe('A01d1GuestLandingM24Component', () => {
  let component: A01d1GuestLandingM24Component;
  let fixture: ComponentFixture<A01d1GuestLandingM24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01d1GuestLandingM24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01d1GuestLandingM24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
