import { Component, OnDestroy, OnInit } from '@angular/core';
import { WheaterService } from '../../services/wheater.service';
import { IWeather } from 'src/app/models/interfaces/weather.interface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();

  initialCityName: string = 'Vitória';

  weatherDatas!: IWeather;

  searchIcon = faMagnifyingGlass;

  constructor(private service: WheaterService) { }

  ngOnInit() {
    this.obterDados(this.initialCityName);
  }

  obterDados(cityName: string) {
    this.service.getWheaterDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
      },
      error: (err) => alert('Cidade não encontrada!'),
    })
  }

  onSubmit() {
    this.obterDados(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
