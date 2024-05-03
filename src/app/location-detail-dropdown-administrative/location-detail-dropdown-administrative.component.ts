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

  checkHandler(i: number, j: number) {
    let checkboxChecked = this.contactAvailabilities[i][j]
    if (i == 0) {
      if (checkboxChecked) {
        this.contactAvailabilities[1][j] = true;
        this.contactAvailabilities[2][j] = true;
      }
    } else {
      if(i == 1) {
        this.contactAvailabilities[0][j] = this.contactAvailabilities[2][j] && checkboxChecked;
      } else {
        this.contactAvailabilities[0][j] = this.contactAvailabilities[1][j] && checkboxChecked;
      }
    }
  }
}
