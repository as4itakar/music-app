import { Injectable } from '@angular/core';
import { MusicStateControllerService } from '../music-state-controller/music-state-controller.service';
import { BehaviorSubject } from 'rxjs';
import { MusicState } from 'src/app/types/MusicState';

@Injectable({
  providedIn: 'root'
})
export class MusicControllerService {

  private player: HTMLAudioElement

  playerState: BehaviorSubject<MusicState>

  constructor( private musicStateController: MusicStateControllerService ) {
    this.playerState = new BehaviorSubject(this.musicStateController.state)
    this.player = new Audio()
    this.player.preload = 'metadata'
  }

  get currentTime(): number{
    return this.player.currentTime
  }

  get duration(): number{
    return this.player.duration
  }

  get paused(): boolean{
    return this.player.paused
  }

  play(): void{
    this.player.play()
    this.musicStateController.changePlay(true)
  }

  pause(): void{
    this.player.pause()
    this.musicStateController.changePlay(false)
  }

  repeat(): void{
    this.changeTime(0)
    this.player.play()
  }

  changeVolume(volume: number): void{
    this.player.volume = volume
    this.musicStateController.changeVolume(volume)
  }

  changeTime(time: number): void{
    const distance = this.player.duration * time
    this.player.currentTime = distance
    this.musicStateController.changeTime(distance, time)
  }

  quickChange(url: string, name: string, id: number): void{
    this.changeSrc(url)
    this.musicStateController.changeName(name)
    this.musicStateController.changeId(id)
  }

  start(url: string, name: string, id: number): void{
    this.changeVolume(this.musicStateController.stateVolume)
    this.musicStateController.changeStay(true)
    this.quickChange(url, name, id)
  }

  changeProgress(): void{
    const progress = this.currentTime / this.duration
    this.musicStateController.changeTime(this.currentTime, progress)
  }

  changeSrc(src: string): void{
    this.player.src = src
    this.play()
  }

  submitOnAudio(): BehaviorSubject<MusicState>{
    return this.playerState
  }

  sendAudioSub(): void{
    this.playerState.next(this.musicStateController.state)
  }

  getmusicId(): number{
    return this.musicStateController.id
  }

}
