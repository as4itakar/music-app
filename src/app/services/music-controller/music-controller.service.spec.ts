/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicControllerService } from './music-controller.service';

describe('Service: MusicController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicControllerService]
    });
  });

  it('should ...', inject([MusicControllerService], (service: MusicControllerService) => {
    expect(service).toBeTruthy();
  }));
});
