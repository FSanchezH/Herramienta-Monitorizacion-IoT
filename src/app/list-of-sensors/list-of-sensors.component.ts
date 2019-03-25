import { Component, ViewChild, Input, AfterContentChecked } from '@angular/core';
import { ISensor } from '../interfaces/sensor';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'list-of-sensors',
  templateUrl: './list-of-sensors.component.html',
  styleUrls: ['./list-of-sensors.component.css']
})

export class ListOfSensorsComponent implements AfterContentChecked {
  constructor(private sensorService: SensorService, public dialog: MatDialog) { }
  @Input() sensorList: ISensor[] = [];
  public displayedColumns: string[] = ['id', 'temperatura', 'bateria', 'cobertura', 'incidencias'];
  public dataSource = new MatTableDataSource();
  public isDisabled: boolean[] = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.dataSource = new MatTableDataSource(this.sensorList);
    this.dataSource.sort = this.sort;
    for (let sensor of this.sensorList){
      if(sensor.incidencias == 0){
        this.isDisabled[sensor.id]=true;
      }else{
        this.isDisabled[sensor.id]=false;
      }
    }
  }

  openDialog(sensor: ISensor) {
    console.log(sensor);
  }
}