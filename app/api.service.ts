import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Subject } from 'rxjs';

//import { environment } from 'D:\WGU\WGU docs\D280 - Javascript Programming\D280-World-Map\src\environments\environment.development.ts;  

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //fetchCountryData(country: string) {
  fetchCountryData(countryID: string) {

    let worldBankAPI = `https://api.worldbank.org/v2/country/${countryID}?format=JSON`;
    return this.http.get(worldBankAPI);
  
  } // end fetchCountryData

  setCountryData(countryID: string) {
    let subject = new Subject(); // method to access observable

    this.fetchCountryData(countryID).subscribe((data: any) => {

      subject.next({ // {} means your passing an object into subject.

        capital: data[1][0].capitalCity,
        incomeLevel: data[1][0].incomeLevel.value,
        region: data[1][0].region.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      
      }) // end subject 

    }) // end subscribe

return subject.asObservable();

  }// end setCountryData

} // end class ApiService
