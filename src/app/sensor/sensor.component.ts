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
  temperatura = "18 ºC";
  bateria = "80%";
  cobertura = "-86 dBm";
  incidencias = "0";
  ngOnInit() {
  }

}
