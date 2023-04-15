import { TestBed } from '@angular/core/testing';

import { BfhashWsHandlerService } from './bfhash-ws-handler.service';

describe('BfhashWsHandlerService', () => {
  let service: BfhashWsHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BfhashWsHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
