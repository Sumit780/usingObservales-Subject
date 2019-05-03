import { TestBed } from '@angular/core/testing';

import { CountpagesService } from './countpages.service';

describe('CountpagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountpagesService = TestBed.get(CountpagesService);
    expect(service).toBeTruthy();
  });
});
