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
  @Input() icono = './assets/images/signalMarker_32.png';
  temperatura = "18 ºC";
  bateria = "80%";
  cobertura = "-86 dBm";
  @Input() incidencias: number;
  selectIcon(incidencias);

  selectIcon(incidencias){
    if(incidencias < 1){
        this.icono = './assets/images/signalMarker_32.png';
    }else{
        this.icono = './assets/images/marker_24.png';
    }
    return this.icono;
  }
  
  ngOnInit() {
  }
}