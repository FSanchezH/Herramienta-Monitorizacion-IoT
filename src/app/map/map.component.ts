import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string;
  latitude: number;
  longitude: number;
  zoom: number;
  
  ngOnInit() {
    this.title = 'Mapa de sensores de Teatinos';
    this.latitude = 36.71982733265364;
    this.longitude = -4.460006260056474;
    this.zoom = 15
  }
}