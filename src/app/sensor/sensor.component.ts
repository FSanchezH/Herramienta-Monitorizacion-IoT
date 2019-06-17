import { Component, OnInit, Input } from '@angular/core';
import { ISensor } from '../interfaces/sensor';
import { MatDialog} from '@angular/material';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})

export class SensorComponent implements OnInit {
  @Input() sensor: ISensor;
  public icono: string;
  public isDisabled: boolean = false;
  public incidencias: string[];

  constructor (public dialog: MatDialog) {}

  public ngOnInit() {
    if(this.sensor.incidencias == "[]"){
      this.sensor.lista_incidencias = [];
    }else{
      this.sensor.lista_incidencias = this.sensor.incidencias.split(',');
    }
    this.chooseIcon();
  }

  private chooseIcon() {
    if (this.sensor.lista_incidencias.length < 1) {
      this.icono = './assets/img/marker/signal_0_incidencia.png';
      this.isDisabled = true;
    } else if (this.sensor.lista_incidencias.length < 2) {
      this.icono = './assets/img/marker/signal_1_incidencia.png';
    } else if (this.sensor.lista_incidencias.length < 3) {
      this.icono = './assets/img/marker/signal_2_incidencia.png';
    } else if (this.sensor.lista_incidencias.length < 4) {
      this.icono = './assets/img/marker/signal_3_incidencia.png';
    } else {
      this.icono = './assets/img/marker/signal_3+_incidencia.png';
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PopupComponent,{
      disableClose: true,
      data: this.sensor
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}