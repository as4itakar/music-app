import { Injectable } from '@angular/core';
import { Music } from 'src/app/types/Music';

@Injectable()
export class MusicPlayerService {

  private musicArr: Music[]

  player = new Audio()

  constructor() { 
    this.musicArr = [
      {
        id: 1,
        url: 'assets/music/Anri-Shyness boy.mp3',
        name: 'Shyness boy'
      },
      {
        id: 2,
        url: 'assets/music/Kill_la_Kill-Before_my_body_is_dry.mp3',
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

  setAudioUrl(url:string): void{
    this.player.volume = 0.3
    this.player.src = url
    this.player.play()
  }

}
