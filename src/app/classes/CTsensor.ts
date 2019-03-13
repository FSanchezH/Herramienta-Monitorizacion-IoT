import { Injectable } from "@angular/core";
import sensorData from '../../assets/sensor.json';

@Injectable({
    providedIn: 'root'
})
export class CTsensor {
    ID: number;
    latitude: number;
    longitude: number;
    temperatura: string;
    bateria: string;
    cobertura: string;
    incidencias: number;
}
/*public getSensor(ID: number) {
        console.log(sensorData);
        this.latitude = sensorData[ID - 1].latitude;
        this.longitude = sensorData[ID - 1].longitude;
        this.temperatura = sensorData[ID - 1].temperatura;
        this.bateria = sensorData[ID - 1].bateria;
        this.cobertura = sensorData[ID - 1].cobertura;
        this.incidencias = sensorData[ID - 1].incidencias;
    }*/
