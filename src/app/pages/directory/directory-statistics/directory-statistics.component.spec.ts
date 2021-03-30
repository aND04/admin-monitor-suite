import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryStatisticsComponent } from './directory-statistics.component';

describe('DirectoryStatisticsComponent', () => {
  let component: DirectoryStatisticsComponent;
  let fixture: ComponentFixture<DirectoryStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
