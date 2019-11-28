import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AddreviewComponent } from './addreview/addreview.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ReviewsComponent,
    LoginComponent,
    RegisterComponent,
    MovieDetailsComponent,
    AddmovieComponent,
    AddreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
