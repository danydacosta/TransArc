import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransarcService } from '../../app/services/transarc.services';

@Component({
  selector: 'page-picker',
  templateUrl: 'picker.html'
})
export class PickerPage {
  //response: any;
  text: String;

  constructor(public navCtrl: NavController, private transarcService:TransarcService) {
    transarcService.Test().subscribe(response => {
      this.text = response[0]['name'];
    });

    
  }

}
