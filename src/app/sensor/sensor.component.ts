import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../classes/sensor';

import sensorData from '../../assets/sensor.json';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  constructor(public sensor: Sensor){}
  @Input() ID: number;
  latitude: number;
  longitude: number;
  icono: string;
  temperatura: string;
  bateria: string;
  cobertura: string;
  incidencias: number;
  sensorList: Sensor[];

 public ngOnInit() {
    this.populateSensor();
    this.chooseIcon();
  }

  private populateSensor(){
    this.sensor.getSensor(this.ID);
    console.log(this.sensor);
    this.latitude = this.sensor.latitude;
    this.longitude = this.sensor.longitude;
    this.temperatura = this.sensor.temperatura;
    this.bateria = this.sensor.bateria;
    this.cobertura = this.sensor.cobertura;
    this.incidencias = this.sensor.incidencias;
  }

  private chooseIcon(){
    if(this.incidencias<1){
      this.icono = './assets/images/signal_0_incidencia.png';
    }else if(this.incidencias<2){
      this.icono = './assets/images/signal_1_incidencia.png';
    }else if(this.incidencias<3){
      this.icono = './assets/images/signal_2_incidencia.png';
    }else if(this.incidencias<4){
      this.icono = './assets/images/signal_3_incidencia.png';
    }else{
      this.icono = './assets/images/signal_3+_incidencia.png';
    }
  }
}