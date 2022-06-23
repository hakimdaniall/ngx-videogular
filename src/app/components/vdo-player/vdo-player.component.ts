import { Component, OnInit } from '@angular/core';
import { VideoPlayerServiceService } from 'src/app/services/video-player-service.service';

@Component({
  selector: 'app-vdo-player',
  templateUrl: './vdo-player.component.html',
  styleUrls: ['./vdo-player.component.scss']
})
export class VdoPlayerComponent implements OnInit {
  videoItems = [];
  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data: any;
  constructor(
    private videoPlayerService: VideoPlayerServiceService
  ) { }

  ngOnInit(): void {
    this.videoPlayerService.getVideoSource().then((videoSource) => {
      this.videoItems = videoSource;
      console.log(this.videoItems);

      this.videoPlayerInit(this.data)
      this.currentVideo = this.videoItems[this.activeIndex]
    });
  }

  videoPlayerInit(data: any) {
    setTimeout(() => {
      this.data = data;
      this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
      this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
      console.log(data)
    }, 5000);
  }

  nextVideo() {
    this.activeIndex++;
    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }
    this.currentVideo = this.videoItems[this.activeIndex];
    console.log('run this function 2')
  }

  initVdo() {
    // this.data.play();
    console.log('run this function 3')
  }
  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
    console.log('run this function 4')
  }
}
