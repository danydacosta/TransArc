import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransarcService } from '../../app/services/transarc.services';
import { SchedulePage } from '../schedule/schedule'

@Component({
  selector: 'page-picker',
  templateUrl: 'picker.html'
})
export class PickerPage {
  //Array des pickers
  regions: Array<any>;
  linesDirections: Array<any>;
  stops: Array<any>;

  //Elements sélectionnés des array
  selectedRegion: any;
  selectedLineDirection: any;
  selectedStop: any;

  //TransarcAPI
  taService: any;

  //NavController
  navController: any;

  constructor(public navCtrl: NavController, private transarcService:TransarcService) {
    this.taService = transarcService;  
    this.navController = navCtrl;
  }

  //Chargement de la page
  ngOnInit(){
    this.taService.getRegions().subscribe(response => {
      this.regions = response;
      console.log(this.regions);
    });  
  }

  //Picker de régions change
  onSelectedRegionChanged(){
    this.taService.getLinesDirections(this.selectedRegion).subscribe(response => {
      this.linesDirections = response;
      console.log(this.linesDirections);
      //On vide le picker des arrêts
      this.stops = [];
    });  
  }

  //Picker des lignes - directions change
  onSelectedLineDirectionChanged(){
    this.taService.getStops(this.selectedLineDirection).subscribe(response => {
      this.stops = response;
      console.log(this.stops);
    }); 
  }

  //Click sur le bouton de validation
  onShowScheduleButtonClicked(){
    this.navController.push(SchedulePage, {param: 'test'});
  }

}
