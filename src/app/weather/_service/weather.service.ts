import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {City} from '../_model/city.model';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  /**
   * get Weather by City name
   * @param city
   */
  public list(city: string): Observable<City> {

    return this.http.get<City>(environment.weather_api + 'weather', {
      params: new HttpParams()
        .append('q', city)
        .append('APPID', environment.weather_api_key)
    }).pipe(
      catchError(this.handleError())
    );

  }

  /**
   * Handle error
   */
  private handleError () {
    return (error: HttpErrorResponse) => {
      return throwError(error);
    };
  }

}
