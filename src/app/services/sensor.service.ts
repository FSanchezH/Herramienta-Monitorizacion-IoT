import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISensor } from '../interfaces/sensor';
import { Observable } from 'rxjs';

@Injectable()
export class SensorService {
  constructor(private http: HttpClient) { };
  
  private token: string = null;
  public getSensors(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>('../../assets/data/allEntities.json');
  }

  public getSensorsTemperatura(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>('../../assets/data/temperatureFilter.json');
  }

  public getSensorsIncidencias(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>('../../assets/data/allEntities.json');
  }

  public getSensorsHumedad(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>('../../assets/data/humidityFilter.json');
  }

  public getTokenAuthentication(): void {
    this.http.post<any>('https://150.214.58.178:6001/v3/auth/tokens',
      {
        "auth": {
          "identity": {
            "methods": [
              "password"
            ],
            "password": {
              "user": {
                "domain": {
                  "name": "smart_campus_uma"
                },
                "name": "emil",
                "password": "2vPUvKyR"
              }
            }
          },
          "scope": {
            "project": {
              "domain": {
                "name": "smart_campus_uma"
              },
              "name": "/tfg_visor_iot"
            }
          }
        }
      },{observe: 'response'}).subscribe(resp => {
        this.token = resp.headers.get('X-Subject-Token');
      });
  }
}