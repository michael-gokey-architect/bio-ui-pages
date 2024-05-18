import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01c2GuestAboutComponent } from './a01c2-guest-about.component';

describe('A01c2GuestAboutComponent', () => {
  let component: A01c2GuestAboutComponent;
  let fixture: ComponentFixture<A01c2GuestAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01c2GuestAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01c2GuestAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
