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
  temperatura = "Temperatura medida por el sensor";
  bateria = "% de batería que le queda al sensor";
  cobertura = "señal que recibe el sensor";
  incidencias = "cantidad de incidencias registradas en las últimas 24h";
  ngOnInit() {
  }

}
