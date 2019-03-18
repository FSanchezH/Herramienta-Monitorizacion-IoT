import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISensor } from '../interfaces/sensor';
import { Observable } from 'rxjs';

@Injectable()
export class SensorService {
  // private _urlSensorList: string = 'http://www.mocky.io/v2/5c8cca67310000d90c4c2522';
  private _urlSensorList: string = 'http://www.mocky.io/v2/5c8fff4f3600004b00f0ffed';
  constructor(private http: HttpClient) { };

  private _localUrl: string = '../../assets/data/sensor.json';

  public getSensors(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>(this._urlSensorList);
  }

  public getSensorById(id: number) {
    return this.http.get('${this.urlSensorList}');
  }

}