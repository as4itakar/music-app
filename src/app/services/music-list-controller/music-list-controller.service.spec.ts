/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicListControllerService } from './music-list-controller.service';

describe('Service: MusicListController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicListControllerService]
    });
  });

  it('should ...', inject([MusicListControllerService], (service: MusicListControllerService) => {
    expect(service).toBeTruthy();
  }));
});
