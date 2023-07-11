import { AnimeVideoComponent } from 'src/app/components/anime-video/anime-video.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';

import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {
  anime$!: Observable<any>;
  sources$: Observable<any[]> | undefined
  epNumPlayingNow:string = '1';

  @ViewChild('animeVideo', { static: false }) animeVideo!: AnimeVideoComponent;
  constructor(private animeService: AnimeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.anime$ = this.route.params.pipe(
      switchMap(params => {
        const animeId = params['animeSlug'];
        return this.animeService.getAnimeDetail(animeId).pipe(
          tap((res: any) => {
            console.log(res);
            if (res.episodesList.length > 0) {
              this.getEpUrl(res.episodesList[0].episodeId);
            }
          })
        );
      })
    );
  }

  getEpUrl(epId: string): void {
    this.sources$ = this.animeService.getAnimeVideo(epId).pipe(
      map((res: any) => {
        return res.sources;
      })
    )

  }



changeEp(episode: any){
  console.log(episode);
  this.getEpUrl(episode.episodeId)
  this.epNumPlayingNow = episode.episodeNum;

}
}
