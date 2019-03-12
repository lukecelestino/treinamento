import { TestBed } from '@angular/core/testing';

import { AuctionsService } from './auctions.service';

describe('AuctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuctionsService = TestBed.get(AuctionsService);
    expect(service).toBeTruthy();
  });
});
