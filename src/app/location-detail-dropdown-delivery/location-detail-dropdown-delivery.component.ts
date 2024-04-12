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
}
