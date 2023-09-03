import { Component, OnInit } from '@angular/core';
import { MusicPlayerService } from 'src/app/services/music-player/music-player.service';
import { Music } from 'src/app/types/Music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  displayedColumns: string[];
  
  dataSource: Music[];

  constructor(private musicPlayer: MusicPlayerService) { 
    this.displayedColumns = ['id', 'name', 'url']
    this.dataSource = musicPlayer.music
  }

  ngOnInit() {
  }


  chooseMusic(audioId: number){
    this.musicPlayer.startAudio(audioId)
  }

}
