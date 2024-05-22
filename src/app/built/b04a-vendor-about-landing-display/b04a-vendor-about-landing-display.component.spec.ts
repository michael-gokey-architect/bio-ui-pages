import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B04aVendorAboutLandingDisplayComponent } from './b04a-vendor-about-landing-display.component';

describe('B04aVendorAboutLandingDisplayComponent', () => {
  let component: B04aVendorAboutLandingDisplayComponent;
  let fixture: ComponentFixture<B04aVendorAboutLandingDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B04aVendorAboutLandingDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B04aVendorAboutLandingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
