import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { env } from 'environments/env';

@Injectable({
  providedIn: 'root'
})






export class AnimeService {
  api: string = env.API;

  constructor(private http: HttpClient) { }


  getPopularAnime() {
    return this.http.get(`${this.api}/popular`);
  }


getAnimeDetail(animeId:string){
  return this.http.get(`${this.api}/anime-details/${animeId}`);
}


getAnimeVideo(epId:string){
  console.log(epId)
  return this.http.get(`${this.api}/vidcdn/watch/${epId}`);
}

searchAnime(kword:string){
  return this.http.get(`${this.api}/search?keyw=${kword}`);
}

}
