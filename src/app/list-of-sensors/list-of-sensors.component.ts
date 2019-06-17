import { Component, ViewChild, Input, AfterContentChecked } from '@angular/core';
import { ISensor } from '../interfaces/sensor';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'list-of-sensors',
  templateUrl: './list-of-sensors.component.html',
  styleUrls: ['./list-of-sensors.component.scss']
})

export class ListOfSensorsComponent implements AfterContentChecked {
  constructor(public dialog: MatDialog) { }
  @Input() sensorList: ISensor[] = [];
  @Input() filter: String;
  public displayedColumns: string[] = ['id', 'temperatura', 'humedad', 'bateria', 'cobertura', 'incidencias'];
  public dataSource = new MatTableDataSource();
  public isDisabled: boolean[] = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
    for (let sensor of this.sensorList) {
      if(sensor.incidencias == "[]"){
        sensor.lista_incidencias = [];
      }else{
        sensor.lista_incidencias = sensor.incidencias.split(',');
        sensor.cantidad_incidencias = sensor.lista_incidencias.length;
      }
      if (sensor.lista_incidencias.length == 0) {
        sensor.cantidad_incidencias = 0;
        if(this.filter == "Incidencias"){
          this.sensorList.splice(this.sensorList.indexOf(sensor),1);
        }
        this.isDisabled[sensor.id] = true;
      } else {
        this.isDisabled[sensor.id] = false;
      }
    }

    switch (this.filter) {
      case "Todos":
        this.displayedColumns = ['id', 'temperatura', 'humedad', 'bateria', 'cobertura', 'cantidad_incidencias'];
        break;
      case "Temperatura":
        this.displayedColumns = ['id', 'temperatura', 'bateria', 'cobertura', 'cantidad_incidencias'];
        break;
      case "Humedad":
        this.displayedColumns = ['id', 'humedad', 'bateria', 'cobertura', 'cantidad_incidencias'];
        break;
      case "Incidencias":
        this.displayedColumns = ['id', 'temperatura', 'humedad', 'bateria', 'cobertura', 'cantidad_incidencias'];
        break;
      default:
        break;
    }

    this.dataSource = new MatTableDataSource(this.sensorList);
    this.dataSource.sort = this.sort;
  }

  openDialog(sensor: ISensor): void {
    let dialogRef = this.dialog.open(PopupComponent, {
      disableClose: true,
      data: sensor
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}