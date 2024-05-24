import { Component } from '@angular/core';
import { DeliveryInformation } from 'src/app/model/delivery-information';

@Component({
  selector: 'app-location-detail-dropdown-delivery',
  templateUrl: './location-detail-dropdown-delivery.component.html',
  styleUrls: ['./location-detail-dropdown-delivery.component.css']
})
export class LocationDetailDropdownDeliveryComponent {
  deliveryInformations: DeliveryInformation[] = [
    {
      device: "Edge",
      model: "Edge510-lte",
      number: 4,
      expected_delivery: "01/09/2023"
    },
    {
      device: "Edge",
      model: "Edge530-lte",
      number: 2,
      expected_delivery: "28/08/2023"
    },
    {
      device: "Edge",
      model: "Edge550",
      number: 1,
      expected_delivery: "30/09/2023"
    }
  ];
  // deliveryInformations: DeliveryInformation[] = [];

  sortTableDevice() {
    this.deliveryInformations.sort((el1: DeliveryInformation, el2: DeliveryInformation) => {
      if (el1.device > el2.device) {
        return 1;
      }

      if (el1.device < el2.device) {
        return -1;
      }

      return 0;
    })
  }

  sortTableModel() {
    this.deliveryInformations.sort((el1: DeliveryInformation, el2: DeliveryInformation) => {
      if (el1.model > el2.model) {
        return 1;
      }

      if (el1.model < el2.model) {
        return -1;
      }

      return 0;
    })
  }

  sortTableNumber() {
    this.deliveryInformations.sort((el1: DeliveryInformation, el2: DeliveryInformation) => {
      if (el1.number > el2.number) {
        return 1;
      }

      if (el1.number < el2.number) {
        return -1;
      }

      return 0;
    })
  }

  sortTableDate() {
    this.deliveryInformations.sort((el1: DeliveryInformation, el2: DeliveryInformation) => {
      let date1 = new Date(el1.expected_delivery);
      let date2 = new Date(el2.expected_delivery);
      console.log(date1);
      console.log(date2);

      //TODO: change expected_delivery to Date
      if (date1 > date2) {
        return 1;
      }

      if (date1 < date2) {
        return -1;
      }

      return 0;
    })
  }
}
