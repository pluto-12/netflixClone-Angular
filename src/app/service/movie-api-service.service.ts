import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { bannerResponse } from "../model/banner-data";
import { movieDetails } from "../model/movie-details";
import { videoResponse } from "../model/movie-video";
import { movieCastCrewResponse } from "../model/movie-cast";


@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl = environment.tmdbUrl
  apikey = environment.tmdbKey


  //bannerapidata

  bannerApiData(): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }


  // trendingmovieapidata 
  trendingMovieApiData(): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  // searchmovive
  getSearchMovie(data: any): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<movieDetails> {
    return this.http.get<movieDetails>(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<videoResponse> {
    return this.http.get<videoResponse>(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<movieCastCrewResponse> {
    return this.http.get<movieCastCrewResponse>(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
  // action 
  fetchActionMovies(): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<bannerResponse> {
    return this.http.get<bannerResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }



}
