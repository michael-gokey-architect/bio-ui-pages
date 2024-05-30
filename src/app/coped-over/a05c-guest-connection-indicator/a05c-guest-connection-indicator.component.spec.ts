import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A05cGuestConnectionIndicatorComponent } from './a05c-guest-connection-indicator.component';

describe('A05cGuestConnectionIndicatorComponent', () => {
  let component: A05cGuestConnectionIndicatorComponent;
  let fixture: ComponentFixture<A05cGuestConnectionIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A05cGuestConnectionIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A05cGuestConnectionIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
