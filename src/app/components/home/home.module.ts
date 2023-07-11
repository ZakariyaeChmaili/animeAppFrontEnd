import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { AngularMaterialModule } from 'src/app/angular.material.imports';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from 'src/app/components/home/home-routing.module';
import { AnimeDetailsComponent } from 'src/app/components/anime-details/anime-details.component';
import { AnimeVideoComponent } from 'src/app/components/anime-video/anime-video.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { VgStreamingModule } from '@videogular/ngx-videogular/streaming'; // Import VgStreamingModule
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule } from '@angular/forms';
import { SearchedAnimeComponent } from 'src/app/components/searched-anime/searched-anime.component';

@NgModule({
  declarations: [
    HomeComponent,
    TopNavComponent,
    MainComponent,
    AnimeDetailsComponent,
    AnimeVideoComponent,
    SearchedAnimeComponent,



  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgbCarouselModule,
    CarouselModule,
    RouterModule,
    HomeRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    SkeletonModule,
    FormsModule

  ]
})
export class HomeModule { }
