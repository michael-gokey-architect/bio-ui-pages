import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D09cQuestQrComponent } from './d09c-quest-qr.component';

describe('D09cQuestQrComponent', () => {
  let component: D09cQuestQrComponent;
  let fixture: ComponentFixture<D09cQuestQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D09cQuestQrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D09cQuestQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
