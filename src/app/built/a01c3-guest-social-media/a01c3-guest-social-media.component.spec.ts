import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01c3GuestSocialMediaComponent } from './a01c3-guest-social-media.component';

describe('A01c3GuestSocialMediaComponent', () => {
  let component: A01c3GuestSocialMediaComponent;
  let fixture: ComponentFixture<A01c3GuestSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01c3GuestSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01c3GuestSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
