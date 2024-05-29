import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01d2GuestDisplayComponent } from './a01d2-guest-display.component';

describe('A01d2GuestDisplayComponent', () => {
  let component: A01d2GuestDisplayComponent;
  let fixture: ComponentFixture<A01d2GuestDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01d2GuestDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01d2GuestDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
