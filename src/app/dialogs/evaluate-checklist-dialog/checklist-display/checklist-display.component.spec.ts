import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistDisplayComponent } from './checklist-display.component';

describe('ChecklistDisplayComponent', () => {
  let component: ChecklistDisplayComponent;
  let fixture: ComponentFixture<ChecklistDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
