import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ISensor } from '../interfaces/sensor';
import { MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SensorService } from '../services/sensor.service';
@Component({
  selector: 'list-of-sensors',
  templateUrl: './list-of-sensors.component.html',
  styleUrls: ['./list-of-sensors.component.css']
})

export class ListOfSensorsComponent implements OnInit {
  constructor ( private sensorService : SensorService ) {}
  public sensorList: ISensor[] = [];
  public displayedColumns: string[] = ['id', 'temperatura', 'bateria', 'cobertura', 'incidencias'];
  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.sensorService.getSensors().subscribe(data => this.sensorList = data);
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.dataSource = new MatTableDataSource(this.sensorList);
    this.dataSource.sort = this.sort;
  }

  showPopUp(sensor: ISensor){
    console.log(sensor);
  }
}