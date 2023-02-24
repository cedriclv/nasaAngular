import { Component } from '@angular/core';
import { ApiResponse } from './api-response';
import { NasaService } from './nasa.service';
import { Observable, throwError } from "rxjs";
import { NasaObject } from "./nasa-object";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nasa';

  imgOfTheDay: string = '';
  titleNasa: string = '';
  explanationNasa: string = '';
  dateNasa: string = '';
  public nasaObject : NasaObject = new NasaObject('','','','','');

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.getImageOfTheDay();
  }


  getImageOfTheDay() {
    let dataReceived : Observable<ApiResponse> = this.nasaService.getImageOfTheDay();    
    dataReceived.subscribe( (response: ApiResponse) => {
      {
        this.nasaObject = response;
      }
    });
  }
}
