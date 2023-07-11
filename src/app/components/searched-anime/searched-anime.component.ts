import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searched-anime',
  templateUrl: './searched-anime.component.html',
  styleUrls: ['./searched-anime.component.scss']
})
export class SearchedAnimeComponent implements OnInit {

@Input() animes!: any;
@Input() kword!: any;
nores: boolean = false;

ngOnInit(): void {
  console.log(this.animes);
  let element = document.getElementById('searchedAnime') as HTMLElement;
  element.scrollIntoView({ behavior: "smooth", block: "center" });
  if(this.animes.length == 0){
    this.nores = true;
  }
}

}
