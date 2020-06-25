import { TestBed } from '@angular/core/testing';

import { NgSimpleCarouselService } from './ng-simple-carousel.service';

describe('NgSimpleCarouselService', () => {
  let service: NgSimpleCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSimpleCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
