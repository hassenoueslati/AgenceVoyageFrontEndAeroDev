import { TestBed } from '@angular/core/testing';

import { VoitureeService } from './voituree.service';

describe('VoitureeService', () => {
  let service: VoitureeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoitureeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
