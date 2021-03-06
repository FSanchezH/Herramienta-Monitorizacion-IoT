import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//-------GoogleMaps-------
import { AgmCoreModule } from '@agm/core';

//-------Angular material-------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SensorComponent } from './sensor/sensor.component';
import { HttpClientModule } from '@angular/common/http';
import { SensorService } from './services/sensor.service';
import { ListOfSensorsComponent } from './list-of-sensors/list-of-sensors.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SensorComponent,
    ListOfSensorsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatButtonToggleModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7vUp4j4mQ75e6V6A0rWpa9CY8SSrkD7A',  //The key is necessary
    })
  ],
  providers: [SensorService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }