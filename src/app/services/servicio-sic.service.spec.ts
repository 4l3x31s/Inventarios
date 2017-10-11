import { TestBed, inject } from '@angular/core/testing';

import { ServicioSicService } from './servicio-sic.service';

describe('ServicioSicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioSicService]
    });
  });

  it('should be created', inject([ServicioSicService], (service: ServicioSicService) => {
    expect(service).toBeTruthy();
  }));
});
