import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E08aEventHomeComponent } from './e08a-event-home.component';

describe('E08aEventHomeComponent', () => {
  let component: E08aEventHomeComponent;
  let fixture: ComponentFixture<E08aEventHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E08aEventHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E08aEventHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
