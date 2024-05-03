import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent {

  open1: boolean = false;
  open2: boolean = false;


  changeHide2() {
    if (this.open2 == true) {
      this.open2 = false;
      this.open1 = true;
    }
    else{
      this.open2 = true;
      this.open1 = false;
    }
  }

  changeHide() {
    if(this.open1 == true){
      this.open1 = false;
      this.open2 = true;
    }
    else{
      this.open1 = true;
      this.open2 = false
    }
  }

  afficherSecondComposant(open: string) {
    if (open == "comp1") {
      if (this.open1 == false) {
        this.open1 = true;
        this.open2 = false;
      }
      else {
        this.open1 = false;
      }
    }
    else {
      if (this.open2 == false) {
        this.open2 = true;
        this.open1 = false;
      }
      else {
        this.open2 = false;
      }
    }
  }


}
