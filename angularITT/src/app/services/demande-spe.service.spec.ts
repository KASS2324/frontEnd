import { TestBed } from '@angular/core/testing';

import { DemandeSpeService } from './demande-spe.service';

describe('DemandeSpeService', () => {
  let service: DemandeSpeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeSpeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
