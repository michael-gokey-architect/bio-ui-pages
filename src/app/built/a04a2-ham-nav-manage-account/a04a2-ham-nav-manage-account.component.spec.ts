import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A04a2HamNavManageAccountComponent } from './a04a2-ham-nav-manage-account.component';

describe('A04a2HamNavManageAccountComponent', () => {
  let component: A04a2HamNavManageAccountComponent;
  let fixture: ComponentFixture<A04a2HamNavManageAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A04a2HamNavManageAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A04a2HamNavManageAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
