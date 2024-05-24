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
      this.contactAvailabilities[i] = [true, true, true, true, true, false, false]
    }
  }

  checkHandler(i: number, j: number) {
    let checkboxChecked = this.contactAvailabilities[i][j]
    if (i == 0) {
      if (!checkboxChecked) {
        this.contactAvailabilities[1][j] = true;
        this.contactAvailabilities[2][j] = true;
      }
    } else {
      if(i == 1) {
        this.contactAvailabilities[0][j] = this.contactAvailabilities[2][j] && !checkboxChecked;
      } else {
        this.contactAvailabilities[0][j] = this.contactAvailabilities[1][j] && !checkboxChecked;
      }
    }
    this.contactAvailabilities[i][j] = !checkboxChecked
  }

  check_24h_7() {
    for (let i=0; i<3; i++) {
      for (let j = 0; j<7; j++) {
        this.contactAvailabilities[i][j] = true;
      }
    }
  }

  check_weekdays() {
    for (let i=0; i<3; i++) {
      for (let j = 0; j<5; j++) {
        this.contactAvailabilities[i][j] = true;
      }
      for (let j=5; j<7; j++) {
        this.contactAvailabilities[i][j] = false;
      }
    }
  }
}
