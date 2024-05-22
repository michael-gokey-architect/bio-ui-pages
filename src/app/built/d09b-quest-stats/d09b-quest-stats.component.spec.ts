import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D09bQuestStatsComponent } from './d09b-quest-stats.component';

describe('D09bQuestStatsComponent', () => {
  let component: D09bQuestStatsComponent;
  let fixture: ComponentFixture<D09bQuestStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D09bQuestStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D09bQuestStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
