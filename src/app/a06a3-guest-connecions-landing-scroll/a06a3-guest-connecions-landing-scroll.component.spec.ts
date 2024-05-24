import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A06a3GuestConnecionsLandingScrollComponent } from './a06a3-guest-connecions-landing-scroll.component';

describe('A06a3GuestConnecionsLandingScrollComponent', () => {
  let component: A06a3GuestConnecionsLandingScrollComponent;
  let fixture: ComponentFixture<A06a3GuestConnecionsLandingScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A06a3GuestConnecionsLandingScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A06a3GuestConnecionsLandingScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
