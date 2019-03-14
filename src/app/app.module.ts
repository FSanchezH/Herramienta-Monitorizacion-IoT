import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
//-------Angular material-------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SensorComponent } from './sensor/sensor.component';
import { HttpClientModule } from '@angular/common/http';
import { SensorService } from './services/sensor.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SensorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7vUp4j4mQ75e6V6A0rWpa9CY8SSrkD7A',  //La key es necesaria para que funcione
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
