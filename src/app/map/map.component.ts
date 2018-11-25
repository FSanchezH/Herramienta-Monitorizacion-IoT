import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'Mapa de sensores de Teatinos';
  latitude = 36.719681;
  longitude = -4.453487;
  locationChosen = false;

  onChoseLocation(event){
    //console.log(event);
    this.latitude = event.coords.lat;  //Así asigno los nuevos valores a las variables
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
  
  ngOnInit() {

  }
}