import { Component, OnInit } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { CTSensor } from "../classes/CTSensor";
import { SensorService } from "../services/sensor.service";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import sensorData from '../../assets/sensor.json';

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
  //sensorListObservable:  Observable<CTsensor[]>;
  sensorListObservable:  CTSensor[];
  
  ngOnInit() {
    this.initializeMap();
    //this.sensorService.getSensor().subscribe((data: CTsensor)=> this.sensor = { ...data});
    //console.log(this.sensor);
    //this.sensorListObservable = this.http.get<CTsensor[]>("../../assets/sensor.json");
    this.sensorListObservable = sensorData;
    console.log(this.sensorListObservable);
    this.sensorService.getSensors()
  }

  private initializeMap(){
    this.latitude = 36.71982733265364;
    this.longitude = -4.460006260056474;
    this.zoom = 15;
  }
}