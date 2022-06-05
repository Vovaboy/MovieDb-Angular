import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {DataService, MovieService} from "../../servies";
import {IGenre, IMovie} from "../../interfaces";

@Component({
  selector: 'app-sort-genre',
  templateUrl: './sort-genre.component.html',
  styleUrls: ['./sort-genre.component.css']
})
export class SortGenreComponent implements OnInit {

  movies: IMovie[];
  genre: IGenre | undefined;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.activatedRoute.params.subscribe(value => {
        this.movieService.sortGenre(value['genre'], page || 1).subscribe(({results}) => {
          this.dataService.storage.subscribe(genres => {
            this.genre = genres.find(genre => genre.id === +value['genre']);
          })
          this.movies = results
        })
      })

    })
  }
}
