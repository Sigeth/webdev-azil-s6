import { Component } from '@angular/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent {

  open1: boolean = false;
  open2: boolean = false;


  afficherSecondComposant(open:string){
    if(open == "comp1"){
      if(this.open1 == false){
      this.open1 = true;
      this.open2 = false;
      }
      else{
        this.open1 = false;
      }
    }
    else{
      if(this.open2 == false){
        this.open2 = true;
        this.open1 = false;
      }
      else{
        this.open2 = false;
      }
    }
  }

}
