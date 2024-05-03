import { Component,Input } from '@angular/core';
import {LocationDetailComponent} from '../location-detail/location-detail.component'

@Component({
  selector: 'app-location-detail-dropdown',
  templateUrl: './location-detail-dropdown.component.html',
  styleUrl: './location-detail-dropdown.component.css',
})
export class LocationDetailDropdownComponent {

  @Input() menu?: number;

  @Input() open1?: boolean;
  @Input() open2?: boolean;
  
  form: boolean = false;

}
