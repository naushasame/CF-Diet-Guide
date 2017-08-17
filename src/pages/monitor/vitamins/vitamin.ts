import { Component,Renderer } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';


import { VitaminDetailPage } from '../../monitor/vitamins/vitamindetails';
import { MonitorHomePage } from '../../monitor/monitor';
import { VitaminRecord } from '../../monitor/vitamins/vitaminrecord';



@Component({
  selector: 'page-Vitamin',
  templateUrl: 'vitamin.html'
})
export class VitaminRecordPage{
    Vitamins:VitaminRecord[]=[];
    vitDateVal:string;
    vitNameVal:string;
    vitDoseVal:string;
    vitDoseUnitVal:string;
    vitMealTimeVal:string;
    addResult="";
 constructor(public navCtrl: NavController, params: NavParams,public renderer: Renderer, public viewCtrl: ViewController,public events:Events) {
    this.getVitaminProfile();
  }
  onPageDidEnter() {
     this.getVitaminProfile();
  }
  getVitaminProfile(){
    if(localStorage.getItem("VitaminProfile")!=null){
        this.Vitamins=JSON.parse(localStorage.getItem("VitaminProfile"));
    }
  }
 
  saveVitamin(){
    this.getVitaminProfile();
   var vitDate= this.vitDateVal;
    var vitName=this.vitNameVal;
    var vitDose=this.vitDoseVal;
    var vitDoseUnit=this.vitDoseUnitVal;
    var vitMealTime=this.vitMealTimeVal;

    this.Vitamins.push({vitDate,vitName,vitDose,vitDoseUnit,vitMealTime});
    this.Vitamins.sort(this.sortbyDate);
    localStorage.setItem("VitaminProfile",JSON.stringify(this.Vitamins))

  this.addResult="Saved Successfully."
  this.raiseEvent();
  this.dismiss();
  }
sortbyDate(obj1:VitaminRecord,obj2:VitaminRecord){  
    var dateA = new Date(obj1.vitDate).getTime();
    var dateB = new Date(obj2.vitDate).getTime();
    return dateA > dateB ? 1 : -1;  
}
clearResult(){
  this.addResult="";
}
  goToVitaminDetails(){
    this.navCtrl.push(VitaminDetailPage);
  }  
  goBack(){
      this.navCtrl.push(MonitorHomePage);
  }
    dismiss(){
      this.navCtrl.pop();
    }
    raiseEvent(){
     this.events.publish("vitamin:added");
    }
}
