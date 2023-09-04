import { Component } from '@angular/core';
import { MusicListControllerService } from 'src/app/services/music-list-controller/music-list-controller.service';
import { MusicPlayerService } from 'src/app/services/music-player/music-player.service';
import { Music } from 'src/app/types/Music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent{

  displayedColumns: string[];
  
  dataSource: Music[];

  constructor(private musicListController: MusicListControllerService, private musicPlayer: MusicPlayerService) { 
    this.displayedColumns = ['id', 'name', 'url']
    this.dataSource = musicListController.music
  }

  chooseMusic(audioId: number){
    this.musicPlayer.startAudio(audioId)
  }

}
