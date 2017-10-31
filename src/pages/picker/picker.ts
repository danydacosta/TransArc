import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransarcService } from '../../app/services/transarc.services';

@Component({
  selector: 'page-picker',
  templateUrl: 'picker.html'
})
export class PickerPage {
  //response: any;
  regions: Array<any>;

  constructor(public navCtrl: NavController, private transarcService:TransarcService) {
    transarcService.Test().subscribe(response => {
      this.regions = response;
      console.log(this.regions);
    });    
  }

}
