import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})

export class ForecastComponent implements OnInit {
  myWeather: any;
  city: string = 'London';
  country: string = 'GB';

  iconURL: string = '';
  date_text: string = '';
  summary: string = '';
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;


  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getWeather(this.city).subscribe({

      next: (res) => {
        console.log(res)
        this.myWeather = res;
        this.country = this.myWeather.city.country;
        this.date_text = this.myWeather.list[0].dt_txt;
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.list[0].weather[0].icon + '@2x.png';
        this.summary = this.myWeather.list[0].weather[0].main;
        this.temperature = this.myWeather.list[0].main.temp;
        this.feelsLikeTemp = this.myWeather.list[0].main.feels_like;
        this.pressure = this.myWeather.list[0].main.pressure;
        this.humidity = this.myWeather.list[0].main.humidity;
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }
}
