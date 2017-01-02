/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapRunService } from './map-run.service';

describe('MapRunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapRunService]
    });
  });

  it('should ...', inject([MapRunService], (service: MapRunService) => {
    expect(service).toBeTruthy();
  }));
});
