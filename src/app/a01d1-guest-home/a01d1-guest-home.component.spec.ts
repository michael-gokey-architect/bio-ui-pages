import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01d1GuestHomeComponent } from './a01d1-guest-home.component';

describe('A01d1GuestHomeComponent', () => {
  let component: A01d1GuestHomeComponent;
  let fixture: ComponentFixture<A01d1GuestHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01d1GuestHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01d1GuestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
