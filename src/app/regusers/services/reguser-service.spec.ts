import { TestBed } from '@angular/core/testing';

import { ServicesService } from './reguser-service.service';

describe('ServicesService', () => {
  let service: ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
