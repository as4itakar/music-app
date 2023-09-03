import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Music } from 'src/app/types/Music';
import { MusicState } from 'src/app/types/MusicState';

@Injectable()
export class MusicPlayerService {

  private musicArr: Music[]

  playerState: BehaviorSubject<MusicState>

  player = new Audio()

  musicState: MusicState

  constructor() {

    this.musicState = {
      id: 0,
      name: '',
      play: false,
      volume: 0.5,
      currentTime: 0,
      progress: 0
    }

    this.playerState = new BehaviorSubject(this.musicState)

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

  submitOnAudio(): BehaviorSubject<MusicState>{
    return this.playerState
  }

  startAudio(id: number): void{
    if (id === this.musicState.id){
      if (this.player.paused){
        this.playAudio()
      }
      else{
        this.pauseAudio()
      }
      return
    }
    const track = this.musicArr.find( (m) => m.id === id)
    if(track){
      this.player.volume = this.musicState.volume
      this.player.src = track.url
      this.player.preload = 'metadata'
      this.player.play()
      this.musicState.name = track.name
      this.musicState.play = true
      this.musicState.id = track.id
      this.playerState.next(this.musicState)
      this.durationAnimation(this.musicState.name)
    }
  }

  durationAnimation(audioName:string){
    console.log('asd')
    requestAnimationFrame(
      this.mes.bind(this, audioName)
    )
  }

  mes(audioName: string):void{
      if(audioName !== this.musicState.name){
        return
      }
      const preogress = this.player.currentTime / this.player.duration
      this.musicState.progress = preogress
      this.musicState.currentTime = this.player.currentTime
      this.playerState.next(this.musicState)
      if(this.player.currentTime === this.player.duration){
        this.nextAudio()
        return
      } else if (this.player.paused){
        return
      }
      requestAnimationFrame(this.mes.bind(this, audioName))
  }

  playAudio(){
    this.player.play()
    this.musicState.play = true
    this.playerState.next(this.musicState)
    this.durationAnimation(this.musicState.name)
  }

  pauseAudio(){
    this.player.pause()
    this.musicState.play = false
    this.playerState.next(this.musicState)
  }

  changeAudioVolume(vol: number){
    this.player.volume = vol
    this.musicState.volume = vol
  }

  changeAudioTime(time: number){
    this.player.currentTime = this.player.duration * time
  }

  nextAudio(){
    const track = this.musicArr.find( (m) => m.id === (this.musicState.id + 1))
    if (track){
      this.player.src = track.url
      this.player.play()
      this.musicState.name = track.name
      this.musicState.play = true
      this.musicState.id = track.id
      this.playerState.next(this.musicState)
    }else{
      this.player.src = this.musicArr[0].url
      this.player.play()
      this.musicState.name = this.musicArr[0].name
      this.musicState.play = true
      this.musicState.id = this.musicArr[0].id
      this.playerState.next(this.musicState)
    }
    this.durationAnimation(this.musicState.name)
  }

  prevAudio(){
    const track = this.musicArr.find( (m) => m.id === (this.musicState.id - 1))
    if (track){
      this.player.src = track.url
      this.player.play()
      this.musicState.name = track.name
      this.musicState.play = true
      this.musicState.id = track.id
      this.playerState.next(this.musicState)
    }else{
      this.player.currentTime = 0
      this.player.play()
    }
    this.durationAnimation(this.musicState.name)
  }

  offAudioVolume(){
    this.player.volume = 0
    this.musicState.volume = 0
    this.playerState.next(this.musicState)
  }

  onAudioVolume(){
    this.player.volume = 0.5
    this.musicState.volume = 0.5
    this.playerState.next(this.musicState)
  }
}
