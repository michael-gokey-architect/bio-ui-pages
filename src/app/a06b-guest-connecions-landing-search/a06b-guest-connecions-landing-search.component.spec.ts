import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A06bGuestConnecionsLandingSearchComponent } from './a06b-guest-connecions-landing-search.component';

describe('A06bGuestConnecionsLandingSearchComponent', () => {
  let component: A06bGuestConnecionsLandingSearchComponent;
  let fixture: ComponentFixture<A06bGuestConnecionsLandingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A06bGuestConnecionsLandingSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A06bGuestConnecionsLandingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
