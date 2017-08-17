import { Component } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';
import { GlucoseRecordPage } from '../../monitor/glucose/glucosereadings';
import { GlucoseRecord } from '../../monitor/glucose/glucoserecord';


@Component({
  selector: 'page-glucosedetails',
  templateUrl: 'glucosereadingsdetails.html'
})
export class GlucoseDetailPage {
    Glucosesrecords:GlucoseRecord[]=[];
 constructor(public navCtrl: NavController,public modalCtrl: ModalController,public events:Events) {
    events.subscribe('glucose:added',()=>{this.getGlucoseProfile();});
    this.getGlucoseProfile();
  }
  getGlucoseProfile(){
    if(localStorage.getItem("GlucoseProfile")!=null){
        this.Glucosesrecords=JSON.parse(localStorage.getItem("GlucoseProfile"));
    }

  }
  onPageDidEnter() {
     this.getGlucoseProfile();
     this.events.subscribe('glucose:added',()=>{this.getGlucoseProfile();});
  }
  
  delete(index: number) {
        this.Glucosesrecords.splice(index, 1);
        localStorage.setItem("GlucoseProfile", JSON.stringify(this.Glucosesrecords));
    }

   goToAdd(){
      let AddModal = this.modalCtrl.create(GlucoseRecordPage);
      AddModal.present();
      //this.navCtrl.push(MealsRecordPage);
    }
}
