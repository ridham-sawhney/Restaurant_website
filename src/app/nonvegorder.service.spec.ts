import { TestBed } from '@angular/core/testing';

import { NonvegorderService } from './nonvegorder.service';

describe('NonvegorderService', () => {
  let service: NonvegorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonvegorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
