import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B04fVendorStoreConnectComponent } from './b04f-vendor-store-connect.component';

describe('B04fVendorStoreConnectComponent', () => {
  let component: B04fVendorStoreConnectComponent;
  let fixture: ComponentFixture<B04fVendorStoreConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B04fVendorStoreConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B04fVendorStoreConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
