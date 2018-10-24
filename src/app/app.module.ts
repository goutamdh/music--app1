import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
      MatCheckboxModule,
      MatIconModule,
      MatAutocompleteModule,
      MatFormFieldModule, 
      MatSlideToggleModule, 
      MatInputModule,
      MatProgressBarModule,
      MatGridListModule,
      MatButtonToggleModule,
      MatToolbarModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider'

import { AppComponent } from './app.component';
import { PlayerComponent } from './music/player/player.component';
import { TrackService } from './music/services/tracks/track-service.service';
import { HeaderComponent } from './music/header/header.component';
import { AnimationComponent } from './music/animation/animation.component';
import { PlaylistComponent } from './music/playlist/playlist.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HeaderComponent,
    AnimationComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatProgressBarModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
