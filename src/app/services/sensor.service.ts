import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISensor } from '../interfaces/sensor';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  "Fiware-Service": "smart_campus_uma",
  "Fiware-ServicePath": "/tfg_visor_iot"
});

@Injectable()
export class SensorService {
  private _urlSensorList: string = 'http://www.mocky.io/v2/5cd6f9cd3000004a40606201'; // Mezcla de sensores (Humedad y temperatura) 
  private _urlSensorListTemperatura: string = 'http://www.mocky.io/v2/5cd713b23000008b41606223'; // Lista de sensores filtrados por solo Temperatura
  private _urlSensorListHumedad: string = 'http://www.mocky.io/v2/5cd713f73000002d4a606224'; //Lista de sensores filtrados por solo Humedad
  private _urlSensorListIncidencias: string = 'http://www.mocky.io/v2/5cd714a4300000f648606226'; //Lista de sensores filtrados por solo Incidencias
  constructor(private http: HttpClient) { };

  private _localUrl: string = '../../assets/data/sensor.json';

  public getSensors(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>('/v2/entities?options=keyValues',{headers});
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