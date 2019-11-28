import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Comment } from '../comment';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }
  private movies: Movie[];
  private commentos: Comment[];
  private comcomments: String;

  comment = "";
  postComment = [];


  public movieId;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
    let id = params.get('id');
    this.movieId = id;
    });
    this.getMovieId(this.movieId);
}


getMovieId(id){
  this.movieService.getMovieId(id).subscribe((data) => {
    this.movies = data;
  })
}

btn_post(){
  this.postComment.push(this.comment);
  this.comment = "";
}
}
