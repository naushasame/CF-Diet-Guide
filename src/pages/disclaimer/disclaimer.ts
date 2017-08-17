import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html'
})
export class DisclaimerPage {
    init_bg:string="images/inital_load_bg.png";

  constructor(public navCtrl: NavController) {

  }
  goHome(){
      this.navCtrl.push(HomePage);
  }

}
