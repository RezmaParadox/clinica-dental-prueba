import { TestBed } from '@angular/core/testing';

import { SubscribeNewsService } from './subscribe-news.service';

describe('SubscribeNewsService', () => {
  let service: SubscribeNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribeNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
