import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7vUp4j4mQ75e6V6A0rWpa9CY8SSrkD7A',  //La key es necesaria para que funcione
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
