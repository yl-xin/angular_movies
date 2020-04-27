import {Component} from '@angular/core';
import {BodyMoviesService} from './body-movies.service';
import {IMovies} from './movies';

@Component({
  selector:'app-body-movies',
  templateUrl:'./body-movies.component.html',
  styleUrls:['./body-movies.component.css']
})

export class BodyMoviesComponent{
    movies: IMovies[];
    constructor(private movieService:BodyMoviesService){}
    // initiale movies by subscribe
    ngOnInit(){
        this.movieService.getMovies().subscribe(data=>{
            // console.log(data);
            this.movies=data});
    }


 
}
