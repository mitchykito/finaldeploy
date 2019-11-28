import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Users } from '../users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private movies: Movie[];
  showUpdate = false;
  constructor(private movieService: MovieService, private router: Router) { }

  getMovies(){
    this.movieService.getMovies()
    .subscribe((data) =>{
      this.movies = data;
    });
  }

  ngOnInit() {
    this.getMovies();
  }

  addReview(id:string){
    this.router.navigate(['/add_review',id]);
  }

  deleteMovie(id){
    this.movieService.deleteMovie(id).subscribe((data)=>{
      console.log(data);
      this.getMovies()
    });
  }

  // show_update(){
  //   this.showUpdate = !this.showUpdate;
  // }
}
