import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  private url:string = "http://localhost:8080";

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + '/movies');
  }
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url + '/users');
  }
  getMovieId(id): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url + '/movies/' + id);
  }
  private headers = new HttpHeaders().set('Content-Type','application/json');

  addMovie(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(
      this.url + '/movies',
      movie,{
        headers: this.headers
     }
    )}

    updateMovie(movie:Movie, id:string):Observable<Movie>{
      return this.http.put<Movie>(
        this.url + '/movies/' + id,
        movie,{
          headers: new HttpHeaders({
            "Content-Type": "application/json",
          })
      });
    }
    deleteMovie(id:string){
      return this.http.delete(
        this.url + '/movies/' + id);
    }

    addUser(user:Users):Observable<Users>{
      return this.http.post<Users>(
        this.url + '/users',
        user,{
          headers: this.headers
       }
      )}
  }
