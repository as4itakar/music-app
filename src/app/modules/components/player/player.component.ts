import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicPlayerService } from 'src/app/services/music-player/music-player.service';
import { MusicState } from 'src/app/types/MusicState';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {

  constructor(private musicPlayer: MusicPlayerService) { }

  musicSub: Subscription

  musicState: MusicState

  ngOnInit() {
    this.musicSub = this.musicPlayer.submitOnPlayer().subscribe(
      (m) => this.musicState = m
    )
  }

  ngOnDestroy(): void {
    this.musicSub.unsubscribe()
  }

  stopMusic(): void{
    this.musicPlayer.pauseAudio();
  }

  playMusic(): void{
    this.musicPlayer.playAudio();
  }

  changeVolume(vol: number): void{
    this.musicPlayer.changeAudioVolume(vol)
  }

  changeTime(time: number): void{
    this.musicPlayer.changeAudioTime(time)
  }

  nextMusic(): void{
    this.musicPlayer.nextAudio()
  }

  prevMusic(): void{
    this.musicPlayer.prevAudio()
  }

  offVolume(): void{
    this.musicPlayer.offAudioVolume()
  }

  onVolume(): void{
    this.musicPlayer.onAudioVolume()
  }

}
