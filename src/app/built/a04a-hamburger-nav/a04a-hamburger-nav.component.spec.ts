import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A04aHamburgerNavComponent } from './a04a-hamburger-nav.component';

describe('A04aHamburgerNavComponent', () => {
  let component: A04aHamburgerNavComponent;
  let fixture: ComponentFixture<A04aHamburgerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A04aHamburgerNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A04aHamburgerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
