import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IGenre, IMovie} from "../../interfaces";
import {DataService} from "../../servies";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: IMovie;
  genres: IGenre[];
  genresById:IGenre[]

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService) {

  }

  ngOnInit(): void {
    let {data} = history.state;
    this.activatedRoute.params.subscribe(() => {
      this.movieDetails = data;
    })
    this.dataService.storage.subscribe(value => this.genres = value)

    let arr = [] as IGenre[];
    for (let id of this.movieDetails.genre_ids) {
      this.genres.map(genre => {
        if (id === genre.id) {
          arr.push(genre)
        }
      });
      this.genresById = arr
    }
  }
}
