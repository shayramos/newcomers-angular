import { TestBed } from '@angular/core/testing';

import { NifValidatorService } from './nif-validator.service';

describe('NifValidatorService', () => {
  let service: NifValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NifValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
