import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { IWeather } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-wheater-card',
  templateUrl: './wheater-card.component.html',
  styleUrls: []
})
export class WheaterCardComponent implements OnInit {

  @Input() weatherDatas!: IWeather;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  constructor() { }

  ngOnInit() {
    console.log('filho', this.weatherDatas);
  }

}
