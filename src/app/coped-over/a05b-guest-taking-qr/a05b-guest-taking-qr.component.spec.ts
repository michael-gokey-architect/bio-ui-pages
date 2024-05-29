import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A05bGuestTakingQrComponent } from './a05b-guest-taking-qr.component';

describe('A05bGuestTakingQrComponent', () => {
  let component: A05bGuestTakingQrComponent;
  let fixture: ComponentFixture<A05bGuestTakingQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A05bGuestTakingQrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A05bGuestTakingQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
