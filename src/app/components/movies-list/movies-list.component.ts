import {Component, OnInit} from '@angular/core';

import {MovieService} from "../../servies";
import {IMovie} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IMovie[];


  constructor(private movieService: MovieService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.movieService.getAllMovies(page || 1).subscribe(value => this.movies = value.results)
    })
  }


}
