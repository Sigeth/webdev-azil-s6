import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationDetailInformationsComponent } from './location-detail-informations/location-detail-informations.component';
import { LocationDetailDropdownAdministrativeComponent } from './location-detail-dropdown-administrative/location-detail-dropdown-administrative.component';
import { LocationDetailDropdownDeliveryComponent } from './location-detail-dropdown-delivery/location-detail-dropdown-delivery.component';
import { LocationDetailDropdownComponent } from './location-detail-dropdown/location-detail-dropdown.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LocationDetailComponent,
    LocationDetailInformationsComponent,
    LocationDetailDropdownAdministrativeComponent,
    LocationDetailDropdownDeliveryComponent,
    LocationDetailDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
