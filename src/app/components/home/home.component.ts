import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../servies";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: IMovie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    // this.movieService.sortGenre(12).subscribe(value => value)
    this.movieService.getAllMovies().subscribe(value => {
      this.movies = value.results
      this.movies.sort((a, b): number => {
        return b.vote_average - a.vote_average
      })
    })
  }
}
