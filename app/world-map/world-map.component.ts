import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {
  //countryData: any = {};

// ----------------------------------------------------------------------
 // the following constructor line is not working properly: <---------------
 // -------------------------------------------------------------------
constructor (private apiService: ApiService) {} //no provider for http client

 setCountryData(event: any) {
  console.log('Country ID: ', event.target.id);//event.target.id works, .name doesn't: why?
  console.log('Country Name: ', event.target.getAttribute("name"));

//this.apiService.fetchCountryData(event.target.id).subscribe(data => console.log(data));

//this.apiService.fetchCountryData(event.target.id);
//this.apiService.setCountryData(event.target.id);

//the following lines are the error i keep getting when i uncomment the 
// constructor and this.apiService.fetchCountryData...:
/*
main.ts:5 ERROR NullInjectorError: R3InjectorError(Standalone[_AppComponent])[_ApiService -> _ApiService -> _HttpClient -> _HttpClient]: 
  NullInjectorError: No provider for _HttpClient!
    at NullInjector.get (core.mjs:5605:27)
    at R3Injector.get (core.mjs:6048:33)
    at R3Injector.get (core.mjs:6048:33)
    at injectInjectorOnly (core.mjs:911:40)
    at Module.ɵɵinject (core.mjs:917:42)
    at Object.ApiService_Factory [as factory] (api.service.ts:11:24)
    at core.mjs:6168:43
    at runInInjectorProfilerContext (core.mjs:867:9)
    at R3Injector.hydrate (core.mjs:6167:17)
    at R3Injector.get (core.mjs:6037:33)
*/
//this.getData(event.target.id); //need this line for getData <-----------

} // end of setCountryData

//------------------- getData ----------------------------------------
// this is a method that needs to be in api.service.ts, not here. 
// the only reason I have this is to practice accessing the different
// variables and objects in the api. 

//getData = (info: any) => { //testing, uncomment the following getData
// getData = (countryID: string) => { 

//   const request = new XMLHttpRequest();
//   let popApiJSON = `https://api.worldbank.org/v2/country/${countryID}?format=JSON`; 
  
//   request.open('GET', popApiJSON);

//   request.onload = function() {
//     const info = JSON.parse(request.response);
//     console.log(info[1][0]);
//     console.log("Capital: ", info[1][0].capitalCity); 
//     console.log("Income Level: ", info[1][0].incomeLevel.value); 
//     console.log("Region: ", info[1][0].region.value); 
//     console.log("Latitude: ", info[1][0].latitude); 
//     console.log("Longitude: ", info[1][0].longitude); 

//     let countryData = {
//       capital: info[1][0].capitalCity,
//       incomeLevel: info[1][0].incomeLevel.value,
//       region: info[1][0].region.value,
//       latitude: info[1][0].latitude,
//       longitude: info[1][0].longitude
//     }
//     //console.log("Capital: ", countryData.capital); 
  
//       return countryData;
//   };
//   request.send();

//}; // end getData = (info: any) <-------------------------------------

} // end of class WorldMapComponent
