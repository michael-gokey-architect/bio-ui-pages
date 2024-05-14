import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B04aVendorBioAboutComponent } from './b04a-vendor-bio-about.component';

describe('B04aVendorBioAboutComponent', () => {
  let component: B04aVendorBioAboutComponent;
  let fixture: ComponentFixture<B04aVendorBioAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B04aVendorBioAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B04aVendorBioAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
