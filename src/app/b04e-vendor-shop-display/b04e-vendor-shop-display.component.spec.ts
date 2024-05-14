import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B04eVendorShopDisplayComponent } from './b04e-vendor-shop-display.component';

describe('B04eVendorShopDisplayComponent', () => {
  let component: B04eVendorShopDisplayComponent;
  let fixture: ComponentFixture<B04eVendorShopDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B04eVendorShopDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B04eVendorShopDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
