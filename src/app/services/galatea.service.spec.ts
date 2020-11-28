import { TestBed } from '@angular/core/testing';

import { GalateaService } from './galatea.service';

describe('GalateaService', () => {
  let service: GalateaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalateaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
