import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  countryData: any = {};

constructor (private apiService: ApiService) {} //no provider for http client

 setCountryData(event: any) {
  // console.log('Country ID: ', event.target.id);//event.target.id works, .name doesn't: why?
  // console.log('Country Name: ', event.target.getAttribute("name"));

//this.apiService.fetchCountryData(event.target.id).subscribe(data => console.log(data));
//this.apiService.setCountryData(event.target.id).subscribe(data => console.log(data));
this.apiService.setCountryData(event.target.id).subscribe((data: any ) => {
 // console.log(data)
  this.countryData = {
    ...data,
    country: event.target.getAttribute("name")
  }
})

} // end of setCountryData

} // end of class WorldMapComponent
