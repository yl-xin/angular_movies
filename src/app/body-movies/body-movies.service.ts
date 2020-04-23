import { Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// Setup HTTP request in events.service
export class BodyMoviesService{
  constructor(private http:HttpClient){}
  getMovies(): Observable<any[]>{
    return this.http.get<any[]>('assets/movies.json')
    
    }
}
