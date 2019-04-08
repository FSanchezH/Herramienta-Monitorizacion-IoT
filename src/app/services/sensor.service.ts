import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISensor } from '../interfaces/sensor';
import { Observable } from 'rxjs';

@Injectable()
export class SensorService {
  private _urlSensorListIncidencias: string = 'http://www.mocky.io/v2/5ca0a7f93700004e00899161'; // Lista de 4 sensores con las incidencias como números
  // private _urlSensorList: string = 'http://www.mocky.io/v2/5c8fff4f3600004b00f0ffed'; Lista de 8 sensores con las incidencias como números
  // private _urlSensorList: string = 'http://www.mocky.io/v2/5c9cf44a3300004d003f21df'; // Lista de 8 sensores con las incidencias como array de string
  private _urlSensorList: string = 'http://www.mocky.io/v2/5cab758f300000fd001030fe'; // Mezcla de sensores (Humedad y temperatura) 
  constructor(private http: HttpClient) { };

  private _localUrl: string = '../../assets/data/sensor.json';

  public getSensors(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(this._urlSensorList);
  }

  public getSensorsTemperatura(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(this._urlSensorList);
  }
  
  public getSensorsIncidencias(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(this._urlSensorListIncidencias);
  }
}