/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicStateControllerService } from './music-state-controller.service';

describe('Service: MusicStateController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicStateControllerService]
    });
  });

  it('should ...', inject([MusicStateControllerService], (service: MusicStateControllerService) => {
    expect(service).toBeTruthy();
  }));
});
