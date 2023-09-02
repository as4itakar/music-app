import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MatTableModule } from '@angular/material/table';
import { MusicPlayerService } from 'src/app/services/music-player/music-player.service';
import { UrlPipe } from 'src/app/pipes/url.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  providers: [MusicPlayerService],
  declarations: [MusicComponent, UrlPipe],
  exports: [MusicComponent]
})
export class MusicModule { }
