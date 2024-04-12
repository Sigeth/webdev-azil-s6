import { Component,Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-location-detail-dropdown',
  templateUrl: './location-detail-dropdown.component.html',
  styleUrl: './location-detail-dropdown.component.css',
})
export class LocationDetailDropdownComponent {

  @Input() menu?: number;
  
  form: boolean = false;

  afficherSecondComposant() {
    if(this.form == false){
      this.form = true;
      console.log(this.menu)
    }
    else{
      this.form = false;
    }
  }

}
