import { Component, OnInit } from '@angular/core';
import { MusicVideo } from './MusicVideo'

@Component({
  selector: 'app-releasepage',
  templateUrl: './releasepage.component.html',
  styleUrls: ['./releasepage.component.css']
})
export class ReleasepageComponent implements OnInit {
  MVList: MusicVideo[];
  constructor() { }

  ngOnInit(): void {
    this.MVList = [
      {
        MVTitleTrack: 'Wannabe',
        MVArtistName: 'Golden Child',
        MVYoutubeURL: 'https://www.youtube.com/watch?v=AnSAGpoqLPg'
      },
      {
        MVTitleTrack: "I'm in trouble",
        MVArtistName: "NU'EST",
        MVYoutubeURL: 'https://www.youtube.com/watch?v=4Lm9u-iXrDc'
      }
    ]
  }

}
