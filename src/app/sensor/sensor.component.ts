import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() ID: string;
  icono = './assets/images/signalMarker.png';
  temperatura = "18 ºC";
  bateria = "80%";
  cobertura = "-86 dBm";
  @Input() incidencias: number;
  selectIcon(incidencias);

  selectIcon(incidencias){
    if(incidencias < 1){
        this.icono = './assets/images/greenSensor.png';
    }else{
        this.icono = './assets/images/redSensor.png';
    }
    return this.icono;
  }
  
  ngOnInit() {
  }
}