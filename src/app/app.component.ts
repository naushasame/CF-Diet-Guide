import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InitialPage } from '../pages/initial/initial';
import { TabsPage } from '../pages/tabs/tabs';



@Component({
  templateUrl: 'app.html'
})
export class CFDietGuide {

  rootPage:any=TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.setRootPage();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
   onPageDidEnter() {
     this.setRootPage();
  }
  setRootPage(){
    if(localStorage.getItem("appUserUsername")=="null"||localStorage.getItem("appUserUsername")==null){
      this.rootPage=InitialPage;
    }
    else{
      this.rootPage=TabsPage;
      
    }
  }
}
