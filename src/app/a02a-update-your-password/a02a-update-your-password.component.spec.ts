import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A02aUpdateYourPasswordComponent } from './a02a-update-your-password.component';

describe('A02aUpdateYourPasswordComponent', () => {
  let component: A02aUpdateYourPasswordComponent;
  let fixture: ComponentFixture<A02aUpdateYourPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A02aUpdateYourPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A02aUpdateYourPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
