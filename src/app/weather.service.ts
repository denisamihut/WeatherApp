import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=5aecdebfad2b5e742ec7ed4f5ccb40e0&units=metric')
  }
}
