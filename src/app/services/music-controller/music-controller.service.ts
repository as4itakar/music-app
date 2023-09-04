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

  play(){
    this.player.play()
    this.musicStateController.changePlay(true)
  }

  pause(){
    this.player.pause()
    this.musicStateController.changePlay(false)
  }

  repeat(){
    this.changeTime(0)
    this.player.play()
  }

  changeVolume(volume: number){
    this.player.volume = volume
    this.musicStateController.changeVolume(volume)
  }

  changeTime(time: number){
    const distance = this.player.duration * time
    this.player.currentTime = distance
    this.musicStateController.changeTime(distance, time)
  }

  quickChange(url: string, name: string, id: number){
    this.changeSrc(url)
    this.musicStateController.changeName(name)
    this.musicStateController.changeId(id)
  }

  start(url: string, name: string, id: number){
    this.changeVolume(this.musicStateController.stateVolume)
    this.quickChange(url, name, id)
  }

  changeProgress(){
    const progress = this.currentTime / this.duration
    this.musicStateController.changeTime(this.currentTime, progress)
  }

  changeSrc(src: string){
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
