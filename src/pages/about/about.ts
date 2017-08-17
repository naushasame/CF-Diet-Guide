import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  profilePic:string="assets/img/profilePic.png";

  constructor(public navCtrl: NavController) {

  }
 goHome(){
      this.navCtrl.push(HomePage);
  }
}
