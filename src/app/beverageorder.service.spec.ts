import { TestBed } from '@angular/core/testing';

import { BeverageorderService } from './beverageorder.service';

describe('BeverageorderService', () => {
  let service: BeverageorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
