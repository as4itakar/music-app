import { Injectable } from '@angular/core';
import { MusicState } from 'src/app/types/MusicState';

@Injectable({
  providedIn: 'root'
})
export class MusicStateControllerService {

  private musicState: MusicState
  
  constructor() { 
    this.musicState = {
      id: 0,
      name: '',
      play: false,
      volume: 0.5,
      currentTime: 0,
      progress: 0
    }
  }
    
  changeId(id: number): void{
    this.musicState.id = id
  }

  changeName(name: string): void{
    this.musicState.name = name
  }

  changePlay(play: boolean): void{
    this.musicState.play = play
  }

  changeVolume(volume: number): void{
    this.musicState.volume = volume
  }

  changeTime(currentTime: number, progress: number): void{
    this.musicState.currentTime = currentTime
    this.musicState.progress = progress
  }

  get state(): MusicState{
    return this.musicState
  }

  get stateVolume(): number{
    return this.musicState.volume
  }

  get stateName(): string{
    return this.musicState.name
  }

  get id(): number{
    return this.musicState.id
  }
}
