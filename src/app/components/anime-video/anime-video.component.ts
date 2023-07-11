import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {VgApiService} from '@videogular/ngx-videogular/core';

import Hls from 'hls.js';




@Component({
  selector: 'app-anime-video',
  templateUrl: './anime-video.component.html',
  styleUrls: ['./anime-video.component.scss']
})
export class AnimeVideoComponent {
  media: any;
  hls: any;
  api!: VgApiService;

  @ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement> = {} as ElementRef<HTMLVideoElement>;
  @Input() sources!:any;
  source!:any
  constructor() {
    this.hls = new Hls();

  }

  ngOnInit() {
    console.log(this.sources);
    this.source = JSON.parse(this.sources);
    this.hls.loadSource(this.source[0].file);
    this.hls.attachMedia(this.video.nativeElement);
   }

  loadVideo(sources: any[]) {
    console.log(sources[0].file);
    this.hls.loadSource(sources[0].file);
    this.hls.attachMedia(this.video.nativeElement);

  }
  onPlayerReady(api: VgApiService) {
    this.api = api;
}

}


