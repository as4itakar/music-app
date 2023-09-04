import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { MusicPlayerService } from 'src/app/services/music-player/music-player.service';
import { MusicControllerService } from 'src/app/services/music-controller/music-controller.service';

import { MusicComponent } from './music.component';
import { PlayerComponent } from '../components/player/player.component';
import { ScaleDirective } from 'src/app/directives/scale.directive';

import { UrlPipe } from 'src/app/pipes/url.pipe';
import { TimePipe } from 'src/app/pipes/time.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    MusicPlayerService,
    MusicControllerService
  ],
  declarations: [
    MusicComponent, 
    PlayerComponent,
    TimePipe,
    UrlPipe,
    ScaleDirective
  ],
  exports: [MusicComponent]
})
export class MusicModule { }
