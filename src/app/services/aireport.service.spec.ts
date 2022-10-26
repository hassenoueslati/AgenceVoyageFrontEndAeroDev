import { TestBed } from '@angular/core/testing';

import { AireportService } from './aireport.service';

describe('AireportService', () => {
  let service: AireportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AireportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
