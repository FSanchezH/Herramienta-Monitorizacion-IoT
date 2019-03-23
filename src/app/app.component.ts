import { Component } from '@angular/core';
import { SensorService } from './services/sensor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sensorService: SensorService) { }
 
  ngOnInit(): void {
  }
}
