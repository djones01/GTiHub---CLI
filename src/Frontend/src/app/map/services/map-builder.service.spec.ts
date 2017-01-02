/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapBuilderService } from './map-builder.service';

describe('MapBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapBuilderService]
    });
  });

  it('should ...', inject([MapBuilderService], (service: MapBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
