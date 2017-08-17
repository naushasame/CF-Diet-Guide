import { Component } from '@angular/core';
import { NavParams,NavController,IonicPage } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { AboutPage } from '../about/about';
import { ProfilePage } from '../../pages/profile/profile';
import { DisclaimerPage } from '../../pages/disclaimer/disclaimer';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ProfilePage;
  tab3Root: any = AboutPage;
  tab4Root: any= DisclaimerPage;
  mySelectedIndex: number;

  constructor(public navCtrl: NavController,navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
