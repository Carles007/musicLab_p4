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
import {MatListModule} from '@angular/material/list';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';





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
    ScrollingModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
