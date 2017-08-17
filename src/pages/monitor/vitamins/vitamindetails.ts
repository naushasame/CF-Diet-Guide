import {Component }from '@angular/core'; 
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';

import {VitaminRecordPage }from '../../monitor/vitamins/vitamin'; 
import {VitaminRecord }from '../../monitor/vitamins/vitaminrecord'; 


@Component( {
  selector:'page-VitaminIntakes', 
  templateUrl:'vitamindetails.html'
})
export class VitaminDetailPage {
    Vitamins:VitaminRecord[] = []; 
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public events:Events) {
    events.subscribe('vitamin:added',()=>{this.getVitaminProfile();});
    this.getVitaminProfile(); 
  }
  getVitaminProfile() {
    if (localStorage.getItem("VitaminProfile") != null) {
        this.Vitamins = JSON.parse(localStorage.getItem("VitaminProfile")); 
        //this.Vitamins.sort(this.sortbyDate);
    }

  }
  onPageDidEnter() {
     this.getVitaminProfile(); 
     this.events.subscribe('vitamin:added',()=>{this.getVitaminProfile();});
  }
   sortbyDate(obj1,obj2){  
    var dateA = new Date(obj1.vitDate).getTime();
    var dateB = new Date(obj2.vitDate).getTime();
    return dateA > dateB ? 1 : -1;  
}
  delete(index:number) {
        this.Vitamins.splice(index, 1); 
        localStorage.setItem("VitaminProfile", JSON.stringify(this.Vitamins)); 
    }
  goBack() {
      this.navCtrl.push(VitaminRecordPage); 
  }
    goToAdd(){
      let AddModal = this.modalCtrl.create(VitaminRecordPage);
      AddModal.present();
      //this.navCtrl.push(MealsRecordPage);
    }
}
