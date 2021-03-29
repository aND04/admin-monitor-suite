import { TestBed } from '@angular/core/testing';

import { UsabilityService } from './usability.service';

describe('UsabilityService', () => {
  let service: UsabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
