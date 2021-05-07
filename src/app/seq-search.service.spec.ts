import { TestBed } from '@angular/core/testing';

import { SeqSearchService } from './seq-search.service';

describe('SeqSearchService', () => {
  let service: SeqSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeqSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
