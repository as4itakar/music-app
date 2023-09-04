import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Music } from 'src/app/types/Music';
import { MusicState } from 'src/app/types/MusicState';
import { MusicControllerService } from '../music-controller/music-controller.service';
import { MusicStateControllerService } from '../music-state-controller/music-state-controller.service';


@Injectable()
export class MusicPlayerService {

  private musicArr: Music[]

  playerState: BehaviorSubject<MusicState>

  constructor(private musicController: MusicControllerService, private musicStateController: MusicStateControllerService) {

    this.playerState = new BehaviorSubject(this.musicStateController.state)

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

  submitOnAudio(): BehaviorSubject<MusicState>{
    return this.playerState
  }

  sendAudioSub(): void{
    this.playerState.next(this.musicStateController.state)
  }

  findTrack(id: number): Music | undefined{
    return this.musicArr.find( (m) => m.id === id)
  }

  startAudio(id: number): void{
    const track = this.findTrack(id)
    if(track){
      this.musicController.start(track.url, track.name, track.id)
      this.sendAudioSub()
      this.durationAnimation()
    }
  }

  durationAnimation(){
    requestAnimationFrame(
      this.mes.bind(this, this.musicStateController.stateName)
    )
  }

  mes(audioName: string):void{
      if(audioName !== this.musicStateController.stateName){
        return
      }
      this.musicController.changeProgress()
      this.sendAudioSub()
      if(this.musicController.currentTime === this.musicController.duration){
        this.nextAudio()
        return
      } else if (this.musicController.paused){
        return
      }
      requestAnimationFrame(this.mes.bind(this, audioName))
  }

  playAudio(){
    this.musicController.play()
    this.sendAudioSub()
    this.durationAnimation()
  }

  pauseAudio(){
    this.musicController.pause()
    this.sendAudioSub()
  }

  changeAudioVolume(vol: number){
    this.musicController.changeVolume(vol)
  }

  changeAudioTime(time: number){
    this.musicController.changeTime(time)
  }

  nextAudio(){
    const track = this.findTrack(this.musicStateController.id + 1)
    if (track){
      this.musicController.quickChange(track.url, track.name, track.id)
      this.sendAudioSub()
    }else{
      this.musicController.quickChange(this.musicArr[0].url, this.musicArr[0].name, this.musicArr[0].id)
      this.sendAudioSub()
    }
    this.durationAnimation()
  }

  prevAudio(){
    const track = this.findTrack(this.musicStateController.id - 1)
    if (track){
      this.musicController.quickChange(track.url, track.name, track.id)
      this.sendAudioSub()
    }else{
      this.musicController.repeat()
    }
    this.durationAnimation()
  }

  offAudioVolume(){
    this.musicController.changeVolume(0)
    this.sendAudioSub()
  }

  onAudioVolume(){
    this.musicController.changeVolume(0.5)
    this.sendAudioSub()
  }
}
