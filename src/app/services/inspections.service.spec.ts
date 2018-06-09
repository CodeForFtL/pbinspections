import { TestBed, inject } from '@angular/core/testing';

import { InspectionsService } from './inspections.service';

describe('InspectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InspectionsService]
    });
  });

  it('should be created', inject([InspectionsService], (service: InspectionsService) => {
    expect(service).toBeTruthy();
  }));
});
