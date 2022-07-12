import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-ngx-plyr',
  templateUrl: './ngx-plyr.component.html',
  styleUrls: ['./ngx-plyr.component.scss']
})
export class NgxPlyrComponent implements OnInit {
  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent, { static: true })
  plyr: PlyrComponent;
  player: Plyr;
  activeIndex: number = 0;
  video: any = [
    {
      name: 'View From A Blue Moon Trailer',
      videoSources: [
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
          type: 'video/mp4',
          size: 576,
        },
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
          type: 'video/mp4',
          size: 720,
        },
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
          type: 'video/mp4',
          size: 1080,
        },
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4',
          type: 'video/mp4',
          size: 1440,
        },
      ],
      poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
      tracks: [
        {
          kind: 'captions',
          label: 'English',
          srclang: 'en',
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
          default: true,
        },
        {
          kind: 'captions',
          label: 'French',
          srclang: 'fr',
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
          default: false,
        }
      ]
    },
    {
      name: 'Videogular test',
      videoSources: [
        {
          src: 'http://static.videogular.com/assets/videos/videogular.mp4',
          type: 'video/mp4',
        },
      ],
      tracks: [
        {
          kind: 'captions',
          label: 'English',
          srclang: 'en',
          src: 'http://static.videogular.com/assets/subs/pale-blue-dot.vtt',
          default: true,
        },
        {
          kind: 'captions',
          label: 'Español',
          srclang: 'es',
          src: 'http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt',
          default: false,
        },
      ]
    }
  ]
  currentVideo = this.video[this.activeIndex];

  instance: any; //test
  constructor() { }

  ngOnInit() { 

    console.log(this.plyr.plyrProgress)
  }

  played(event: Plyr.PlyrEvent) {
    // console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }

  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }
}
