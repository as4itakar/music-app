import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MatTableModule } from '@angular/material/table';
import { MusicPlayerService } from 'src/app/services/music-player/music-player.service';
import { UrlPipe } from 'src/app/pipes/url.pipe';
import { PlayerComponent } from '../components/player/player.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TimePipe } from 'src/app/pipes/time.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    FormsModule
  ],
  providers: [MusicPlayerService],
  declarations: [
    MusicComponent, 
    PlayerComponent,
    UrlPipe,
    TimePipe
  ],
  exports: [MusicComponent]
})
export class MusicModule { }
