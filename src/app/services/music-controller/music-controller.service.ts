import { Injectable } from '@angular/core';
import { MusicStateControllerService } from '../music-state-controller/music-state-controller.service';

@Injectable({
  providedIn: 'root'
})
export class MusicControllerService {

  private player: HTMLAudioElement

  constructor( private musicStateController: MusicStateControllerService ) {
    this.player = new Audio()
    this.player.preload = 'metadata'
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
    this.player.currentTime = this.player.duration * time
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

  get currentTime(): number{
    return this.player.currentTime
  }

  get duration(): number{
    return this.player.duration
  }

  get paused(): boolean{
    return this.player.paused
  }

}
