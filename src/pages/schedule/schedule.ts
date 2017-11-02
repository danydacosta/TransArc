import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  testParam: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.testParam = navParams.get('param');
  }

}
