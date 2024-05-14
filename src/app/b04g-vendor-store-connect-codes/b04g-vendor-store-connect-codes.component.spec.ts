import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B04gVendorStoreConnectCodesComponent } from './b04g-vendor-store-connect-codes.component';

describe('B04gVendorStoreConnectCodesComponent', () => {
  let component: B04gVendorStoreConnectCodesComponent;
  let fixture: ComponentFixture<B04gVendorStoreConnectCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B04gVendorStoreConnectCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B04gVendorStoreConnectCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
