import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISensor } from '../interfaces/sensor';
import { Observable } from 'rxjs';

@Injectable()
export class SensorService {
  // private _urlSensorList: string = 'http://www.mocky.io/v2/5c8cca67310000d90c4c2522'; Lista de 4 sensores con las incidencias como números
  // private _urlSensorList: string = 'http://www.mocky.io/v2/5c8fff4f3600004b00f0ffed'; Lista de 8 sensores con las incidencias como números
  private _urlSensorList: string = 'http://www.mocky.io/v2/5c9cf44a3300004d003f21df'; // Lista de 8 sensores con las incidencias como array de string
  constructor(private http: HttpClient) { };

  private _localUrl: string = '../../assets/data/sensor.json';

  public getSensors(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(this._urlSensorList);
  }

  public getSensorById(id: number) {
    return this.http.get(this._urlSensorList);
  }

}