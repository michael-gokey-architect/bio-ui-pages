import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D09eQuestsRedeemedComponent } from './d09e-quests-redeemed.component';

describe('D09eQuestsRedeemedComponent', () => {
  let component: D09eQuestsRedeemedComponent;
  let fixture: ComponentFixture<D09eQuestsRedeemedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D09eQuestsRedeemedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D09eQuestsRedeemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
