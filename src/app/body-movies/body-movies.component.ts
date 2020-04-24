import {Component} from '@angular/core';
import {BodyMoviesService} from './body-movies.service';

@Component({
  selector:'app-body-movies',
  templateUrl:'./body-movies.component.html',
})

export class BodyMoviesComponent{
    movies: any[];
    constructor(private movieService:BodyMoviesService){}
    // initiale movies by subscribe
    ngOnInit(){
        this.movieService.getMovies().subscribe(data=>{
            console.log(data);
            this.movies=data});
    }


 
}
