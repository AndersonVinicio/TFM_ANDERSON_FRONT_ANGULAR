import { TestBed } from '@angular/core/testing';

import { ApiCitasService } from './api-citas.service';

describe('ApiCitasService', () => {
  let service: ApiCitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
