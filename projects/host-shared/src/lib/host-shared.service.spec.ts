import { TestBed } from '@angular/core/testing';

import { HostSharedService } from './host-shared.service';

describe('HostSharedService', () => {
  let service: HostSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
