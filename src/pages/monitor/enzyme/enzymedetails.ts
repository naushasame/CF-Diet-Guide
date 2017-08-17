import { Component } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';


import { EnzymeRecordPage } from '../../monitor/enzyme/enzyme';
import { EnzymeRecord } from '../../monitor/enzyme/enzymerecord';


@Component({
  selector: 'page-enzymedetails',
  templateUrl: 'enzymedetails.html'
})
export class EnzymeDetailPage {
    enzymerecords:EnzymeRecord[]=[];
    
 constructor(public navCtrl: NavController,public modalCtrl: ModalController,public events:Events) {
    events.subscribe('enzymeRecord:added',()=>{this.getEnzymeProfile();});
    this.getEnzymeProfile();
  }
  getEnzymeProfile(){
    if(localStorage.getItem("EnzymeProfile")!=null){
        this.enzymerecords=JSON.parse(localStorage.getItem("EnzymeProfile"));
    }

  }
  onPageDidEnter() {
     this.getEnzymeProfile();
     this. events.subscribe('enzymeRecord:added',()=>{this.getEnzymeProfile();});
  }
  
  delete(index: number) {
        this.enzymerecords.splice(index, 1);
        localStorage.setItem("EnzymeProfile", JSON.stringify(this.enzymerecords));
    }
goToAdd(){
      let AddModal = this.modalCtrl.create(EnzymeRecordPage);
      AddModal.present();
      //this.navCtrl.push(MealsRecordPage);
    }
}
