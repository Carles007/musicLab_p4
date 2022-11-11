import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';
import { MusicControlComponent } from './music-control/music-control.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Filter1Pipe } from './pipes/filter1.pipe';
import { Filter2Pipe } from './pipes/filter2.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SelectorPipe } from './pipes/selector.pipe';





@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SongDetailComponent,
    ListaCancionesComponent,
    MusicControlComponent,
    ProgressbarComponent,
    FilterPipe,
    Filter1Pipe,
    Filter2Pipe,
    SelectorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
