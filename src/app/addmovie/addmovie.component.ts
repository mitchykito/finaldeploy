import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Users } from '../users';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  title = 'movie-review-system';
  private movies: Movie[];
  private moviePoster: String;
  private movieTitle: String;
  private movieDirector: String;
  private movieGenre: String;
  private movieAbout: String;

  // private users: Users[];
  // private userName: String;
  // private userEmail: String;
  // private userLocation: String;
  // private userRole: String;
  // private username: String;
  // private password: String;

  // selectedFile = null;
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
    // const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);

    // movie.poster = this.moviePoster;
    movie.title = this.movieTitle;
    movie.director = this.movieDirector;
    movie.genre = this.movieGenre;
    movie.about = this.movieAbout;
  
    this.movieService.addMovie(movie).subscribe((data)=>{
      console.log(data);
      this.getMovies();
      alert("Movie added");
    });
  }

  deleteMovie(id){
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

  // onFileSelected(event){
  //   this.selectedFile = <File>event.target.files[0];
  // } 

}
