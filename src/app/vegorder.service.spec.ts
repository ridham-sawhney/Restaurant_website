import { TestBed } from '@angular/core/testing';

import { VegorderService } from './vegorder.service';

describe('VegorderService', () => {
  let service: VegorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
