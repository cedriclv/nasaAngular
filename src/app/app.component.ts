import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nasa';


  imageNasa: string = '';
  titleNasa: string = '';
  explanationNasa: string = '';
  dateNasa: string = '';

  constructor(private nasaService: NasaService){}

  ngOnInit(){
    this.getImageOfTheDay();  
  }

  getImageOfTheDay(){
    this.nasaService.getImageOfTheDay().subscribe( 
        dataFromNasa => { this.imageNasa = JSON.parse(JSON.stringify(dataFromNasa)).url,
          this.dateNasa = JSON.parse(JSON.stringify(dataFromNasa)).date,
          this.titleNasa = JSON.parse(JSON.stringify(dataFromNasa)).title,
          this.explanationNasa = JSON.parse(JSON.stringify(dataFromNasa)).explanation
        }
      );
  }  
}
