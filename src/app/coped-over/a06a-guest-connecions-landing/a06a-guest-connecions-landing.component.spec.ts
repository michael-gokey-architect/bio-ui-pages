import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A06aGuestConnecionsLandingComponent } from './a06a-guest-connecions-landing.component';

describe('A06aGuestConnecionsLandingComponent', () => {
  let component: A06aGuestConnecionsLandingComponent;
  let fixture: ComponentFixture<A06aGuestConnecionsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A06aGuestConnecionsLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A06aGuestConnecionsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
