import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SensorService } from "../services/sensor.service";

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private http: HttpClient, private sensorService: SensorService) { }
  latitude: number;
  longitude: number;
  zoom: number;
  @Input() sensorList = [];

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    this.latitude = 36.71982733265364;
    this.longitude = -4.460006260056474;
    this.zoom = 15;
  }

  onChoseLocation(event){
    // this.latitude = event.coords.lat;
    // this.longitude = event.coords.lng;
  }
}