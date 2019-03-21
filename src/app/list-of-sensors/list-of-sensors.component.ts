import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ISensor } from '../interfaces/sensor';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'list-of-sensors',
  templateUrl: './list-of-sensors.component.html',
  styleUrls: ['./list-of-sensors.component.css']
})

export class ListOfSensorsComponent implements OnInit {
  @Input() sensorList: ISensor[] = [];
  public displayedColumns: string[] = ['id', 'temperatura', 'bateria', 'cobertura', 'incidencias'];
  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.dataSource = new MatTableDataSource(this.sensorList);
    this.dataSource.sort = this.sort;
  }
}