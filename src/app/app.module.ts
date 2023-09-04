import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicModule } from './modules/music/music.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MusicModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
