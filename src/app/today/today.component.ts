import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  myWeather: any;
  city: string = 'London';
  iconURL: string = '';
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
        console.log(this.myWeather)
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.list[0].weather[0].icon + '@2x.png';
        this.summary = this.myWeather.list[0].weather[0].main;
        this.temperature = this.myWeather.list[0].main.temp;
        this.feelsLikeTemp = this.myWeather.list[0].main.feels_like;
        this.humidity = this.myWeather.list[0].main.humidity;
        this.pressure = this.myWeather.list[0].main.pressure;
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    })
  }
}
