import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationDetailInformationsComponent } from './location-detail-informations/location-detail-informations.component';
import { LocationDetailDropdownAdministrativeComponent } from './location-detail-dropdown-administrative/location-detail-dropdown-administrative.component';
import { LocationDetailDropdownDeliveryComponent } from './location-detail-dropdown-delivery/location-detail-dropdown-delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationDetailComponent,
    LocationDetailInformationsComponent,
    LocationDetailDropdownAdministrativeComponent,
    LocationDetailDropdownDeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
