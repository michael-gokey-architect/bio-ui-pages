import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01aGuestSignInComponent } from './a01a-guest-sign-in.component';

describe('A01aGuestSignInComponent', () => {
  let component: A01aGuestSignInComponent;
  let fixture: ComponentFixture<A01aGuestSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01aGuestSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01aGuestSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
