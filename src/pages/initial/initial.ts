import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../../pages/profile/profile';
import {CFDietGuide} from '../../app/app.component';

@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html'
})
export class InitialPage {
    init_bg:string="images/inital_load_bg.png";
    username:string="Nickname";

  constructor(public navCtrl: NavController) {
    this.getProfile();
  }
  getProfile(){
    if(localStorage.getItem("appUserUsername")!="null"){
      this.username=localStorage.getItem("appUserUsername");
    }
     else if(localStorage.getItem("appUserUsername")=="null"){
      this.username="Nickname";
    }
    
  }
  setProfile(){
    localStorage.setItem("appUserUsername",this.username);
    this.navCtrl.push(CFDietGuide);
  }

}
