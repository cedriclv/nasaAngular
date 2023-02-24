import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { ApiResponse } from './api-response';
import { NasaObject } from './nasa-object';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('https://api.nasa.gov/planetary/apod?api_key=qsy0VO6cbP6sHnXmbxNkahccWOYKExhforOrRVP0');
  }
}
