import { TestBed, inject } from '@angular/core/testing';

import { CandeactiveService } from './candeactive.service';

describe('CandeactiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandeactiveService]
    });
  });

  it('should be created', inject([CandeactiveService], (service: CandeactiveService) => {
    expect(service).toBeTruthy();
  }));
});
