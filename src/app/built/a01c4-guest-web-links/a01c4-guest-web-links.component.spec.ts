import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01c4GuestWebLinksComponent } from './a01c4-guest-web-links.component';

describe('A01c4GuestWebLinksComponent', () => {
  let component: A01c4GuestWebLinksComponent;
  let fixture: ComponentFixture<A01c4GuestWebLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01c4GuestWebLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A01c4GuestWebLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
