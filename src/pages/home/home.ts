import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ProfilePage } from '../../pages/profile/profile';
import { AdultHomePage } from '../../pages/adult/adult_home';
import { KidsHomePage } from '../../pages/kids/kids_home';
import { PregHomePage } from '../../pages/pregnant/preg_home';
import { DisclaimerPage } from '../../pages/disclaimer/disclaimer';
import { InfantHomePage } from '../../pages/infant/infant_home';
import { FaqHomePage } from '../../pages/faq/faq_home';
import { OtherHomePage } from '../../pages/others/other_home';
import { MonitorHomePage } from '../../pages/monitor/monitor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;

  constructor(public navCtrl: NavController) {
    this.getUsername();
  }
  getUsername(){
    if(localStorage.getItem("appUserUsername")!=null){
      this.username=localStorage.getItem("appUserUsername");
    }
  }
  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }
  goToAdultHome(){
      this.navCtrl.push(AdultHomePage);
  }
goToKidstHome(){
      this.navCtrl.push(KidsHomePage);
  }
goToPregHome(){
      this.navCtrl.push(PregHomePage);
  }
goToMonitoringtHome(){
      this.navCtrl.push(MonitorHomePage);
  }
goToInfantHome(){
      this.navCtrl.push(InfantHomePage);
  }
goToTipsHome(){
      this.navCtrl.push(OtherHomePage);
  }
goToFaqHome(){
      this.navCtrl.push(FaqHomePage);
  }
goToDisclaimer(){
	 this.navCtrl.push(DisclaimerPage);
}
goToAbout(){
	 this.navCtrl.push(AboutPage);
}
  

}
