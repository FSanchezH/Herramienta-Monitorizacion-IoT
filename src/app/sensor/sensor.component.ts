import { Component, OnInit, Input } from '@angular/core';
import { ISensor } from '../interfaces/sensor';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})

export class SensorComponent implements OnInit {
  @Input() sensor: ISensor;
  public icono: string;
  public isDisabled: boolean = false;

  public ngOnInit() {
    this.chooseIcon();
    if(this.sensor.incidencias == 0){
      this.isDisabled = true;
    }
  }

  private chooseIcon() {
    if (this.sensor.incidencias < 1) {
      this.icono = './assets/images/signal_0_incidencia.png';
    } else if (this.sensor.incidencias < 2) {
      this.icono = './assets/images/signal_1_incidencia.png';
    } else if (this.sensor.incidencias < 3) {
      this.icono = './assets/images/signal_2_incidencia.png';
    } else if (this.sensor.incidencias < 4) {
      this.icono = './assets/images/signal_3_incidencia.png';
    } else {
      this.icono = './assets/images/signal_3+_incidencia.png';
    }
  }
}