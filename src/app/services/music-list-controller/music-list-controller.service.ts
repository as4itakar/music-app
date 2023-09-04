import { Injectable } from '@angular/core';
import { Music } from 'src/app/types/Music';

@Injectable({
  providedIn: 'root'
})
export class MusicListControllerService {

  private musicArr: Music[]

  constructor() { 
    this.musicArr = [
      {
        id: 1,
        url: 'assets/music/Anri-Shyness boy.mp3',
        name: 'Shyness boy'
      },
      {
        id: 2,
        url: 'assets/music/Kill la Kill-Before my body is dry.mp3',
        name: 'Before my body is dry'
      },
      {
        id: 3,
        url: 'assets/music/Lady Gaga feat. Colby O-Donis - Just Dance.mp3',
        name: 'Just Dance'
      },
      {
        id: 4, 
        url: 'assets/music/Thundercat-Friend Zone - Ross from Friends.mp3',
        name: 'Ross from Friends'
      },
    ]
  }

  get music(): Music[]{
    return this.musicArr
  }

  firstMusic(id: number): Music{
    return this.musicArr[id]
  }

  findTrack(id: number): Music | undefined{
    return this.musicArr.find( (m) => m.id === id)
  }

}
