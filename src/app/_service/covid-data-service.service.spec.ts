import { TestBed } from '@angular/core/testing';

import { CovidDataServiceService } from './covid-data-service.service';

describe('CovidDataServiceService', () => {
  let service: CovidDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
