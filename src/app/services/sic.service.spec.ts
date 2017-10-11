import { TestBed, inject } from '@angular/core/testing';

import { SicService } from './sic.service';

describe('SicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SicService]
    });
  });

  it('should be created', inject([SicService], (service: SicService) => {
    expect(service).toBeTruthy();
  }));
});
