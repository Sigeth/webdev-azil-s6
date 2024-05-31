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
      expected_delivery: new Date(2023, 9, 1)
    },
    {
      device: "Edge",
      model: "Edge530-lte",
      number: 2,
      expected_delivery: new Date(2023, 8, 28)
    },
    {
      device: "Edge",
      model: "Edge550",
      number: 1,
      expected_delivery: new Date(2023, 9, 30)
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
      if (el1.expected_delivery > el2.expected_delivery) {
        return 1;
      }

      if (el1.expected_delivery < el2.expected_delivery) {
        return -1;
      }

      return 0;
    })
  }
}
