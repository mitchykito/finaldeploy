import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AddreviewComponent } from './addreview/addreview.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent },
  {
    path: 'movie_details/:_id',
    component: MovieDetailsComponent },
  {
    path: 'reviews',
    component: ReviewsComponent },
  {
    path: 'add_movie',
    component: AddmovieComponent },
  {
    path: 'add_review/:id',
    component: AddreviewComponent },
  {
    path: 'movies',
    component: MoviesComponent },
  {
    path: 'register',
    component: RegisterComponent },
  {
    path: 'login',
    component: LoginComponent },	
  { 
    //redirecting to student route when opening the host
    path: '',
    redirectTo: '/movies', 
    pathMatch: 'full'},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
