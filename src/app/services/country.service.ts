import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Country } from '../components/models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryUrl = 'api/country';

  constructor(
    private http: HttpClient
  ) { }

  getCountry(): Observable<Country> {
    return this.http.get<Country>(this.countryUrl).pipe();
  }
}
