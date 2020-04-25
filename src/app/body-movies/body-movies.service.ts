import { Injectable} from '@angular/core';
import {IMovies} from './movies';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// Setup HTTP request in events.service
export class BodyMoviesService{
  constructor(private http:HttpClient){}
  getMovies(): Observable<IMovies[]>{
    return this.http.get<IMovies[]>('assets/movies.json')
    
    }
}
