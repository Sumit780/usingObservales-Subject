import { TestBed } from '@angular/core/testing';

import { MyclassService } from './myclass.service';

describe('MyclassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyclassService = TestBed.get(MyclassService);
    expect(service).toBeTruthy();
  });
});
