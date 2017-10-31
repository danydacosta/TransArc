import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { AboutPage } from '../about/about';
import { PickerPage } from '../picker/picker';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PickerPage;
  tab2Root = MapPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
