import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B04bVendorBioLandingDisplayComponent } from './b04b-vendor-bio-landing-display.component';

describe('B04bVendorBioLandingDisplayComponent', () => {
  let component: B04bVendorBioLandingDisplayComponent;
  let fixture: ComponentFixture<B04bVendorBioLandingDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B04bVendorBioLandingDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B04bVendorBioLandingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
