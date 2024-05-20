import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01aGuestSignUpComponent } from './a01a-guest-sign-up.component';

describe('A01aGuestSignUpComponent', () => {
  let component: A01aGuestSignUpComponent;
  let fixture: ComponentFixture<A01aGuestSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01aGuestSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01aGuestSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
