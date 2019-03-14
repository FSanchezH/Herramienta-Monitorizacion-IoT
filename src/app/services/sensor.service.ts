import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CTSensor } from '../classes/CTSensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  urlSensorList: string = 'https://pastebin.com/raw/CThijewE';
  constructor(private http: HttpClient) { }

  public getSensors() {
    return this.http.get<CTSensor[]>(this.urlSensorList);
  }

  public getSensorById(id: number) {
    return this.http.get('${this.urlSensorList}');
  }

}