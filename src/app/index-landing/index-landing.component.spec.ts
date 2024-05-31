import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLandingComponent } from './index-landing.component';

describe('IndexLandingComponent', () => {
  let component: IndexLandingComponent;
  let fixture: ComponentFixture<IndexLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
