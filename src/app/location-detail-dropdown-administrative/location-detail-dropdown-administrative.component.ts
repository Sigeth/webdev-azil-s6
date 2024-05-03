import { Component } from '@angular/core';

@Component({
  selector: 'app-location-detail-dropdown-administrative',
  templateUrl: './location-detail-dropdown-administrative.component.html',
  styleUrls: ['./location-detail-dropdown-administrative.component.css']
})
export class LocationDetailDropdownAdministrativeComponent {
  contactAvailabilities: boolean[][] = Array(3)

  constructor() {
    for (let i=0; i<3; i++) {
      this.contactAvailabilities[i] = [true, true, true, false, true, true, true]
    }
  }
}
