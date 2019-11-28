import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';
import { Users } from './users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-review-system';
  private movies: Movie[];
  private movieTitle: String;
  private movieDirector: String;
  private movieGenre: String;
  private movieAbout: String;

  private users: Users[];
  private userName: String;
  private userEmail: String;
  private userLocation: String;
  private userRole: String;
  private username: String;
  private password: String;

  constructor(private movieService: MovieService){}

  getMovies(){
    this.movieService.getMovies()
    .subscribe((data) =>{
      this.movies = data;
    });
  }

  ngOnInit() {
    this.getMovies();
  }

  addMovie(){
    var movie = new Movie();
    movie.title = this.movieTitle;
    movie.director = this.movieDirector;
    movie.genre = this.movieGenre;
    movie.about = this.movieAbout;
  
    this.movieService.addMovie(movie).subscribe((data)=>{
      console.log(data);
      this.getMovies();
    });
  }

  deleteMovie(id:string){
    this.movieService.deleteMovie(id).subscribe((data)=>{
      console.log(data);
      this.getMovies()
    });
  }

  updateMovie(id:string){
    var movie = new Movie();
    movie.title = this.movieTitle;
    movie.director = this.movieDirector;
    movie.genre = this.movieGenre;
    movie.about = this.movieAbout;
    
    this.movieService.updateMovie(movie,id).subscribe((data)=>{
      console.log(data);
      this.getMovies()
    }) 
  }


}
