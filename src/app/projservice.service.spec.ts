import { TestBed } from '@angular/core/testing';

import { ProjserviceService } from './projservice.service';

describe('ProjserviceService', () => {
  let service: ProjserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
