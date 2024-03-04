import { TestBed } from '@angular/core/testing';

import { RejisterService } from './rejister.service';

describe('RejisterService', () => {
  let service: RejisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
