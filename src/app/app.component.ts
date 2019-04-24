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
  public sensorList = [];
  public filter: String = "Todos";
  constructor(private sensorService: SensorService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'temperatura',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/temperatura.svg'));
    iconRegistry.addSvgIcon(
      'incidencias',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/incidencias.svg'));
    iconRegistry.addSvgIcon(
      'todos',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/funnel.svg'));
    iconRegistry.addSvgIcon(
      'humedad',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icon/humidity.svg'));
  }

  ngOnInit(): void {
    this.sensorService.getSensors()
      .subscribe(data => this.sensorList = data); //Cargo lista de sensores
  }

  sinFiltros(filter: String) {
    console.log(filter);
    this.filter = filter;
    this.sensorService.getSensors()
      .subscribe(data => this.sensorList = data); //Cargo lista de sensores
  }

  soloIncidencias(filter: String) {
    console.log(filter);
    this.filter = filter;
    this.sensorService.getSensorsIncidencias()
      .subscribe(data => this.sensorList = data); //Cargo lista de sensores
  }

  soloTemperatura(filter: String) {
    console.log(filter);
    this.filter = filter;
    this.sensorService.getSensorsTemperatura()
      .subscribe(data => this.sensorList = data); //Cargo lista de sensores
  }

  soloHumedad(filter: String) {
    console.log(filter);
    this.filter = filter;
    this.sensorService.getSensorsHumedad()
      .subscribe(data => this.sensorList = data); //Cargo lista de sensores
  }

}