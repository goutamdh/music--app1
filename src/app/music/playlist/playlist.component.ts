import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TrackService } from '../services/tracks/track-service.service';
import { PlayerComponent } from '../player/player.component';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
