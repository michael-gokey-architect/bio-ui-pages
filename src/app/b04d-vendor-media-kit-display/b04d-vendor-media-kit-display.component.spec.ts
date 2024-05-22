import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B04dVendorMediaKitDisplayComponent } from './b04d-vendor-media-kit-display.component';

describe('B04dVendorMediaKitDisplayComponent', () => {
  let component: B04dVendorMediaKitDisplayComponent;
  let fixture: ComponentFixture<B04dVendorMediaKitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B04dVendorMediaKitDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B04dVendorMediaKitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
