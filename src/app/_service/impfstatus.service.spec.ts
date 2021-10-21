import { TestBed } from '@angular/core/testing';

import { ImpfstatusService } from './impfstatus.service';

describe('ImpfstatusService', () => {
  let service: ImpfstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpfstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
