import { Component, OnInit } from '@angular/core';
import { SensorService } from './services/sensor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private sensorService: SensorService) { }
  public sensorList = [];
  ngOnInit(): void {
    this.sensorService.getSensors()
      .subscribe(data => this.sensorList = data); //Cargo lista de sensores
  }
}