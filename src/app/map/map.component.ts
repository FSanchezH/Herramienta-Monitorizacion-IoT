import { Component, OnInit, Input } from '@angular/core';
import { SensorService } from "../services/sensor.service";
import { ISensor } from '../interfaces/sensor';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private sensorService: SensorService) { }
  latitude: number;
  longitude: number;
  zoom: number;
  @Input() sensorList: ISensor[] = [];
  isLoaded: boolean = true;
  ngOnInit(): void {
    this.initializeMap();
  }
    
  private initializeMap() {
    this.latitude = 36.720534;
    this.longitude = -4.471759;
    this.zoom = 15;
  }
}