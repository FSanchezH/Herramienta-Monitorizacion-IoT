import { Injectable } from "@angular/core";

import sensorData from '../../assets/sensor.json';

@Injectable({
    providedIn: 'root',
})

export class Sensor {
    ID: string;
    latitude: number;
    longitude: number;
    temperatura: string;
    bateria: string;
    cobertura: string;
    incidencias: number;
    
    private _value: Object;

    
    

    public getSensor(){
        /*this._value = JSON.parse(sensorData);
        this.ID = JSON.parse(sensorData.id);
        this.latitude = JSON.parse(sensorData.latitude);
        this.longitude = JSON.parse(sensorData.longitude);
        this.temperatura = JSON.parse(sensorData.temperatura);
        this.bateria = JSON.parse(sensorData.bateria);
        this.cobertura = JSON.parse(sensorData.cobertura);
        this.incidencias = JSON.parse(sensorData.incidencias);
        console.log(sensorData);*/
        this.ID = sensorData.id;
        this.latitude = sensorData.latitude;
        this.longitude = sensorData.longitude;
        this.temperatura = sensorData.temperatura;
        this.bateria = sensorData.bateria;
        this.cobertura = sensorData.cobertura;
        this.incidencias = sensorData.incidencias;
    }
}