import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  kword : string=''
  animeSearchedList$!: Observable<any>;
  loading: boolean = false;
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  PopularAnimeList$: Observable<any>;
  constructor(private animeService: AnimeService) {
    this.PopularAnimeList$ = this.animeService.getPopularAnime().pipe(
      tap((res) => {
        console.log(res);
      })
    );

  }



searchAnime(){

  this.loading = true;
  this.animeSearchedList$ = this.animeService.searchAnime(this.kword);
  // this.animeService.searchAnime(this.kword).subscribe((res)=>{
  //   console.log(res);
  // })
  let element = document.getElementById('loading') as HTMLElement;
  console.log(element);
  element.scrollIntoView({behavior: "smooth"});
}

}
