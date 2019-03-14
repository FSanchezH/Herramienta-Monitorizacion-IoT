import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})

export class SensorComponent implements OnInit {
  @Input() ID: number;
  @Input() latitude: number;
  @Input() longitude: number;
  icono: string;
  @Input() temperatura: string;
  @Input() bateria: string;
  @Input() cobertura: string;
  @Input() incidencias: number;
  
  

 public ngOnInit() {
    this.chooseIcon();
    console.log(this.ID);
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