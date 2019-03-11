import { Injectable } from "@angular/core";
import {  HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


import sensorData from '../../assets/sensor.json';

@Injectable({
    providedIn: 'root',
})

export class Sensor {
    constructor(private http: HttpClient){};
    latitude: number;
    longitude: number;
    temperatura: string;
    bateria: string;
    cobertura: string;
    incidencias: number;
    endpoint = 'https://pastebin.com/raw/CThijewE?JSON';

    public getSensor(ID: number){
        this.http.get(this.endpoint);






        console.log(sensorData);
        this.latitude = sensorData[ID-1].latitude;
        this.longitude = sensorData[ID-1].longitude;
        this.temperatura = sensorData[ID-1].temperatura;
        this.bateria = sensorData[ID-1].bateria;
        this.cobertura = sensorData[ID-1].cobertura;
        this.incidencias = sensorData[ID-1].incidencias;
    }
}