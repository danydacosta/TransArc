import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ContactPage } from '../contact/contact';
import { PickerPage } from '../picker/picker';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PickerPage;
  tab2Root = MapPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
