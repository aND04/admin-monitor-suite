import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDomainDialogComponent } from './delete-domain-dialog.component';

describe('DeleteDomainDialogComponent', () => {
  let component: DeleteDomainDialogComponent;
  let fixture: ComponentFixture<DeleteDomainDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDomainDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDomainDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
