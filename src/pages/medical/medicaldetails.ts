import { Component } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';

import { InitialPage } from '../initial/initial';
import { HomePage } from '../../pages/home/home';
import { BMIRecord } from '../medical/bmirecord';
import { ProfilePage } from '../profile/profile';
import { MedicalPage } from '../medical/medical';

@Component({
  selector: 'page-medicaldetails',
  templateUrl: 'medicaldetails.html'
})
export class MedicalDetailPage {
    bmirecords:BMIRecord[]=[];
    height:any=0;
    weight:any=0;
    date:string="";
 constructor(public navCtrl: NavController,public modalCtrl: ModalController,public events:Events) {
    events.subscribe('bmi:added',()=>{this.getBMIProfile();});
    this.getBMIProfile();
  }
  getBMIProfile(){
    if(localStorage.getItem("BMIProfile")!=null){
        this.bmirecords=JSON.parse(localStorage.getItem("BMIProfile"));
       // this.bmirecords.sort(this.sortbyDate);
    }

  }
  onPageDidEnter() {
    this.events.subscribe('bmi:added',()=>{this.getBMIProfile();});
     this.getBMIProfile();
  }

  delete(index: number) {
        this.bmirecords.splice(index, 1);
        localStorage.setItem("BMIProfile", JSON.stringify(this.bmirecords));
    }
  goBack(){
      this.navCtrl.push(MedicalPage);
  }
    goToAdd(){
      let AddModal = this.modalCtrl.create(MedicalPage);
      AddModal.present();
    }
}
