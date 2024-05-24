import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01bGuestWelcomeBackComponent } from './a01b-guest-welcome-back.component';

describe('A01bGuestWelcomeBackComponent', () => {
  let component: A01bGuestWelcomeBackComponent;
  let fixture: ComponentFixture<A01bGuestWelcomeBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01bGuestWelcomeBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01bGuestWelcomeBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
