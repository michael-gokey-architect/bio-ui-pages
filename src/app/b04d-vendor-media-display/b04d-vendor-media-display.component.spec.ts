import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B04dVendorMediaDisplayComponent } from './b04d-vendor-media-display.component';

describe('B04dVendorMediaDisplayComponent', () => {
  let component: B04dVendorMediaDisplayComponent;
  let fixture: ComponentFixture<B04dVendorMediaDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B04dVendorMediaDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B04dVendorMediaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
