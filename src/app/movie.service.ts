import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {movies} from './movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  getMovie(id: number): Observable<any> {
    return of(movies.find(movie => movie.id === id));
  }

  getMovies(): Observable<any> {
    return of(movies);
  }

  getMoviesByCategoryId(id: number): Observable<any> {
    return of(movies.filter(movie => movie.category_id === id));
  }
}
