import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MatTableModule } from '@angular/material/table';
import { MusicPlayerService } from 'src/app/services/music-player/music-player.service';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  providers: [MusicPlayerService],
  declarations: [MusicComponent],
  exports: [MusicComponent]
})
export class MusicModule { }
