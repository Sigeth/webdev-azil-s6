import { Component,EventEmitter,Input, Output } from '@angular/core';
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

  @Output() onHide = new EventEmitter<boolean>();
  @Output() onHide2 = new EventEmitter<boolean>();

  
  setHide(){
     this.onHide.emit(true);
  }

  setHide2(){
    this.onHide2.emit(true);
 }

}
