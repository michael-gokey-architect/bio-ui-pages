import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D09aQuestBadgesComponent } from './d09a-quest-badges.component';

describe('D09aQuestBadgesComponent', () => {
  let component: D09aQuestBadgesComponent;
  let fixture: ComponentFixture<D09aQuestBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D09aQuestBadgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D09aQuestBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
