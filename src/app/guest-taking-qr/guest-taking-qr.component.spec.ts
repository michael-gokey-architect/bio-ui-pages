import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestTakingQrComponent } from './guest-taking-qr.component';

describe('GuestTakingQrComponent', () => {
  let component: GuestTakingQrComponent;
  let fixture: ComponentFixture<GuestTakingQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestTakingQrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestTakingQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
