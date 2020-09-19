import { TestBed } from '@angular/core/testing';

import { RegDataService } from './reg-data.service';

describe('RegDataService', () => {
  let service: RegDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
