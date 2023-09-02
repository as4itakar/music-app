import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [MusicComponent],
  exports: [MusicComponent]
})
export class MusicModule { }
