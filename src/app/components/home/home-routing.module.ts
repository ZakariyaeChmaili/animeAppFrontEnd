import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailsComponent } from 'src/app/components/anime-details/anime-details.component';
import { MainComponent } from 'src/app/components/main/main.component';

const routes: Routes = [
{path: '', redirectTo:'main',pathMatch:'full'},
{path: 'main', component: MainComponent},
{path: 'anime/:animeSlug', component:AnimeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
