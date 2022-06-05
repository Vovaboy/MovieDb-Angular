import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main-layou.component';
import {HeaderComponent} from './components/header/header.component';
import {MainInterceptor} from "./main.interseptor";
import {HomeComponent} from './components/home/home.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { SearchComponent } from './components/search/search.component';
import { GenresComponent } from './components/genres/genres.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PosterPreviewComponent } from './components/poster-preview/poster-preview.component';
import { SortGenreComponent } from './components/sort-genre/sort-genre.component';
import { PlagiarismComponent } from './components/plagiarism/plagiarism.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    HomeComponent,
    MoviesListComponent,
    MovieComponent,
    MovieDetailsComponent,
    MoviesPageComponent,
    SearchComponent,
    GenresComponent,
    PosterPreviewComponent,
    SortGenreComponent,
    PlagiarismComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
