import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B04cVendorMediaBuildComponent } from './b04c-vendor-media-build.component';

describe('B04cVendorMediaBuildComponent', () => {
  let component: B04cVendorMediaBuildComponent;
  let fixture: ComponentFixture<B04cVendorMediaBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B04cVendorMediaBuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B04cVendorMediaBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
