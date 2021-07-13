import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsabilityDeclarationsComponent } from './usability-declarations.component';

describe('UsabilityDeclarationsComponent', () => {
  let component: UsabilityDeclarationsComponent;
  let fixture: ComponentFixture<UsabilityDeclarationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsabilityDeclarationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsabilityDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
