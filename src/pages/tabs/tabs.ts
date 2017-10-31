import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { PickerPage } from '../picker/picker';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PickerPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
