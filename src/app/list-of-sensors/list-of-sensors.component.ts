import { Component, OnInit, Input } from '@angular/core';
import { ISensor } from '../interfaces/sensor';

@Component({
  selector: 'list-of-sensors',
  templateUrl: './list-of-sensors.component.html',
  styleUrls: ['./list-of-sensors.component.css']
})

export class ListOfSensorsComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor() { }
  displayedColumns: string[] = ['id', 'temperatura', 'bateria', 'cobertura', 'incidencias'];
  @Input() dataSource: ISensor[] = [];
}