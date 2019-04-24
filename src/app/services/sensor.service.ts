import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISensor } from '../interfaces/sensor';
import { Observable } from 'rxjs';

@Injectable()
export class SensorService {
  private _urlSensorList: string = 'http://www.mocky.io/v2/5cab758f300000fd001030fe'; // Mezcla de sensores (Humedad y temperatura) 
  private _urlSensorListTemperatura: string = 'http://www.mocky.io/v2/5cc0882a310000eb430363f1'; // Lista de sensores filtrados por solo Temeperatura
  private _urlSensorListHumedad: string = 'http://www.mocky.io/v2/5cc0897d310000580b0363f9'; //Lista de sensores filtrados por solo Humedad
  private _urlSensorListIncidencias: string = 'http://www.mocky.io/v2/5cc08d26310000eb4303640d'; //Lista de sensores filtrados por solo Incidencias
  constructor(private http: HttpClient) { };

  private _localUrl: string = '../../assets/data/sensor.json';

  public getSensors(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(this._urlSensorList);
  }

  public getSensorsTemperatura(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(this._urlSensorListTemperatura);
  }
  
  public getSensorsIncidencias(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(this._urlSensorListIncidencias);
  }

  public getSensorsHumedad(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(this._urlSensorListHumedad);
  }
}