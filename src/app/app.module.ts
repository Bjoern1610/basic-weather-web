import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { GeocodingService } from './service/geocoding/geocoding.service';
import { CardComponent } from './main/weather/card/card.component';
import { WeatherService } from './service/weather/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GeocodingService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
