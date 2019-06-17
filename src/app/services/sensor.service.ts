import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISensor } from '../interfaces/sensor';
import { Observable } from 'rxjs';

@Injectable()
export class SensorService {
  private _urlSensorList: string = 'http://www.mocky.io/v2/5cd6f9cd3000004a40606201'; // Mezcla de sensores (Humedad y temperatura) 
  private _urlSensorListTemperatura: string = 'http://www.mocky.io/v2/5cd713b23000008b41606223'; // Lista de sensores filtrados por solo Temperatura
  private _urlSensorListHumedad: string = 'http://www.mocky.io/v2/5cd713f73000002d4a606224'; //Lista de sensores filtrados por solo Humedad
  private _urlSensorListIncidencias: string = 'http://www.mocky.io/v2/5ceadd6f330000003d7c38f5'; //Lista de sensores filtrados por solo Incidencias
  constructor(private http: HttpClient) { };

  private _localUrl: string = '../../assets/data/sensor.json';
  
  private token: string = null;
  public getSensors(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>('https://150.214.58.178:2026/v2/entities?options=keyValues&type=temperatura,mixta,humedad', {
      headers: new HttpHeaders({
        'Fiware-Service': 'smart_campus_uma',
        'Fiware-ServicePath': '/tfg_visor_iot',
        'X-Auth-Token': this.token
      })
    });
  }

  public getSensorsTemperatura(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>('https://150.214.58.178:2026/v2/entities?options=keyValues&type=temperatura,mixta', {
      headers: new HttpHeaders({
        'Fiware-Service': 'smart_campus_uma',
        'Fiware-ServicePath': '/tfg_visor_iot',
        'X-Auth-Token': this.token
      })
    });
  }

  public getSensorsIncidencias(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>('https://150.214.58.178:2026/v2/entities?options=keyValues&type=temperatura,mixta,humedad&orderBy=incidencias', {
      headers: new HttpHeaders({
        'Fiware-Service': 'smart_campus_uma',
        'Fiware-ServicePath': '/tfg_visor_iot',
        'X-Auth-Token': this.token
      })
    });
  }

  public getSensorsHumedad(): Observable<ISensor[]> {
    return this.http.get<ISensor[]>('https://150.214.58.178:2026/v2/entities?options=keyValues&type=humedad,mixta', {
      headers: new HttpHeaders({
        'Fiware-Service': 'smart_campus_uma',
        'Fiware-ServicePath': '/tfg_visor_iot',
        'X-Auth-Token': this.token
      })
    });
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