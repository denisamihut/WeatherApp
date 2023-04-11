import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  myApiKey: string = '5aecdebfad2b5e742ec7ed4f5ccb40e0';

  constructor(private http: HttpClient) {
  }

  getWeather(city: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + this.myApiKey + '&units=metric')
  }

  getForecast() {
    return this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=38.7267&lon=-9.1403&exclude=current,hourly,minutely,alerts&units=metric&appid=5aecdebfad2b5e742ec7ed4f5ccb40e0')
  }
}
