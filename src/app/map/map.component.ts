import { Component, OnInit, Input } from '@angular/core';
import { SensorService } from "../services/sensor.service";
import { ISensor } from '../interfaces/sensor';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(private sensorService: SensorService) { }
  latitude: number;
  longitude: number;
  zoom: number;
  public mapReady: boolean = false;
  @Input() sensorList: ISensor[] = [];
  ngOnInit(): void {
    this.initializeMap();
  }
    
  loadIcons(){
    this.mapReady = true;
  }

  private initializeMap() {
    this.latitude = 36.720534;
    this.longitude = -4.471759;
    this.zoom = 15;
  }
}