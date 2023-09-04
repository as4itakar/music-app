import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MusicState } from 'src/app/types/MusicState';
import { MusicControllerService } from '../music-controller/music-controller.service';
import { MusicListControllerService } from '../music-list-controller/music-list-controller.service';


@Injectable()
export class MusicPlayerService {

  constructor(private musicController: MusicControllerService, private musicListController: MusicListControllerService) {}

  submitOnPlayer(): BehaviorSubject<MusicState>{
    return this.musicController.submitOnAudio()
  }

  startAudio(id: number): void{
    const track = this.musicListController.findTrack(id)
    if(track){
      this.musicController.start(track.url, track.name, track.id)
      this.musicController.sendAudioSub()
      this.durationAnimation()
    }
  }

  durationAnimation(): void{
    requestAnimationFrame(
      this.mes.bind(this)
    )
  }

  mes():void{
      this.musicController.changeProgress()
      this.musicController.sendAudioSub()
      if(this.musicController.currentTime === this.musicController.duration){
        this.nextAudio()
        return
      } else if (this.musicController.paused){
        return
      }
      requestAnimationFrame(this.mes.bind(this))
  }

  playAudio(): void{
    this.musicController.play()
    this.musicController.sendAudioSub()
    this.durationAnimation()
  }

  pauseAudio(): void{
    this.musicController.pause()
    this.musicController.sendAudioSub()
  }

  changeAudioVolume(vol: number): void{
    this.musicController.changeVolume(vol)
  }

  changeAudioTime(time: number): void{
    this.musicController.changeTime(time)
    this.musicController.sendAudioSub()
  }

  nextAudio(): void{
    const track = this.musicListController.findTrack(this.musicController.getmusicId() + 1)
    if (track){
      this.musicController.quickChange(track.url, track.name, track.id)
      this.musicController.sendAudioSub()
    }else{
      const first = this.musicListController.firstMusic(0)
      this.musicController.quickChange(first.url, first.name, first.id)
      this.musicController.sendAudioSub()
    }
    this.durationAnimation()
  }

  prevAudio(): void{
    const track = this.musicListController.findTrack(this.musicController.getmusicId() - 1)
    if (track){
      this.musicController.quickChange(track.url, track.name, track.id)
      this.musicController.sendAudioSub()
    }else{
      this.musicController.repeat()
    }
    this.durationAnimation()
  }

  offAudioVolume(): void{
    this.musicController.changeVolume(0)
    this.musicController.sendAudioSub()
  }

  onAudioVolume(): void{
    this.musicController.changeVolume(0.5)
    this.musicController.sendAudioSub()
  }
}
