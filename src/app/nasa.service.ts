import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<string> {
    return this.http.get<string>('https://api.nasa.gov/planetary/apod?api_key=mjCowCzGClDEQ37sMLnT6SBabr52nNmfbg2e19Nk');
  }
}
