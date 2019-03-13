import { Injectable } from "@angular/core";

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