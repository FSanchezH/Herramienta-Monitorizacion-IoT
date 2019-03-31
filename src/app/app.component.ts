import { Component, OnInit } from '@angular/core';
import { SensorService } from './services/sensor.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private sensorService: SensorService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'temperatura',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/temperatura.svg'));
    iconRegistry.addSvgIcon(
      'incidencias',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/incidencias.svg'));
  }

  public sensorList = [];
  ngOnInit(): void {
    this.sensorService.getSensors()
      .subscribe(data => this.sensorList = data); //Cargo lista de sensores
  }

  soloIncidencias(){
    this.sensorService.getSensorsIncidencias()
      .subscribe(data => this.sensorList = data); //Cargo lista de sensores
  }

  soloTemperatura(){
    this.sensorService.getSensorsTemperatura()
      .subscribe(data => this.sensorList = data); //Cargo lista de sensores
  }

}