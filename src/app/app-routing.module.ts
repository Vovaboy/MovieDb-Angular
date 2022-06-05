import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layou.component";
import {HomeComponent} from "./components/home/home.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MoviesPageComponent} from "./components/movies-page/movies-page.component";
import {SearchComponent} from "./components/search/search.component";
import {SortGenreComponent} from "./components/sort-genre/sort-genre.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'movies', component: MoviesPageComponent},
      {path: 'movie-details', component: MovieDetailsComponent},
      {path: 'search', component: SearchComponent},
      {path: ':genre', component: SortGenreComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
