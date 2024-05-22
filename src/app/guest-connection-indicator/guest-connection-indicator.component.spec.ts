import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestConnectionIndicatorComponent } from './guest-connection-indicator.component';

describe('GuestConnectionIndicatorComponent', () => {
  let component: GuestConnectionIndicatorComponent;
  let fixture: ComponentFixture<GuestConnectionIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestConnectionIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestConnectionIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
