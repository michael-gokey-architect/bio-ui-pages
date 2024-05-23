import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D09dQuestRewardsComponent } from './d09d-quest-rewards.component';

describe('D09dQuestRewardsComponent', () => {
  let component: D09dQuestRewardsComponent;
  let fixture: ComponentFixture<D09dQuestRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D09dQuestRewardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D09dQuestRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
