import { Component, OnInit } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { CTsensor } from "../classes/CTsensor";
import { SensorService } from "../services/sensor.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private http : HttpClient, private sensorService: SensorService){}
  latitude: number;
  longitude: number;
  zoom: number;
  sensor: CTsensor;
  
  ngOnInit() {
    this.initializeMap();
    this.sensorService.getSensor().subscribe((data: CTsensor)=> this.sensor = {
      ID : data['id'],
      latitude: data['latitude'],
      longitude: data['longitude'],
      temperatura: data['temperatura'],
      bateria: data['bateria'],
      cobertura: data['cobertura'],
      incidencias: data['incidencias']
    });
  }

  private initializeMap(){
    this.latitude = 36.71982733265364;
    this.longitude = -4.460006260056474;
    this.zoom = 15;
  }
}