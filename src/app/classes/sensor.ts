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
        this.ID = "1";
        this.latitude = 36.72014705451366;
        this.longitude = -4.468596293137637;
        this.temperatura = "18 ºC";
        this.bateria = "80%";
        this.cobertura = "-86 dBm";
        this.incidencias = 3;
    }
}