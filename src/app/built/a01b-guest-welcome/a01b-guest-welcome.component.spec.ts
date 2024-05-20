import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01bGuestWelcomeComponent } from './a01b-guest-welcome.component';

describe('A01bGuestWelcomeComponent', () => {
  let component: A01bGuestWelcomeComponent;
  let fixture: ComponentFixture<A01bGuestWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01bGuestWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01bGuestWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
