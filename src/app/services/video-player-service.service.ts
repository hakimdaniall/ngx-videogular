import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerServiceService {

  constructor() { }

  async getVideoSource(): Promise<any> {
    if (environment.mockApiData) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            [
              {
                name: 'Video one',
                src: 'http://static.videogular.com/assets/videos/videogular.mp4',
                type: 'video/mp4',
                track: [
                  {
                    default: true,
                    label: 'English',
                    src: 'http://static.videogular.com/assets/subs/pale-blue-dot.vtt',
                    srclang: 'en'
                  },
                  {
                    default: false,
                    label: 'Español',
                    src: 'http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt',
                    srclang: 'es'
                  },
                ]
              },
              {
                name: 'Video two',
                src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
                type: 'video/mp4'
              },
              {
                name: 'Video three',
                src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
                type: 'video/mp4'
              }
            ]
          );
        }, environment.mockApiSimulatedDelayDuration);
      });
    } else {
      // Proper API call here
    }
  }
}
