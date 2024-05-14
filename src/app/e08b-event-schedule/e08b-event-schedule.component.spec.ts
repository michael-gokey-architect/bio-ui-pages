import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E08bEventScheduleComponent } from './e08b-event-schedule.component';

describe('E08bEventScheduleComponent', () => {
  let component: E08bEventScheduleComponent;
  let fixture: ComponentFixture<E08bEventScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E08bEventScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E08bEventScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
