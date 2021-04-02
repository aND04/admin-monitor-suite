import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateChecklistDialogComponent } from './evaluate-checklist-dialog.component';

describe('EvaluateChecklistDialogComponent', () => {
  let component: EvaluateChecklistDialogComponent;
  let fixture: ComponentFixture<EvaluateChecklistDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateChecklistDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateChecklistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
