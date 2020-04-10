import { Component, OnInit } from '@angular/core';
import {movies} from '../movies';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any;

  constructor(private movieService: MovieService) {}


  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    // tslint:disable-next-line:no-shadowed-variable
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }

}
