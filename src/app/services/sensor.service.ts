import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SensorService {
  constructor(private http: HttpClient) { }
  urlSensorList = 'https://pastebin.com/raw/CThijewE';
  urlSensor = 'https://pastebin.com/raw/TrwqJ5Ef';

  public getSensorList(){
    return this.http.get(this.urlSensor);
  }
}