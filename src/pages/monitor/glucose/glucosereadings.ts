import { Component,Renderer } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';

import { GlucoseDetailPage } from '../../monitor/glucose/glucosereadingsdetails';
import { MonitorHomePage } from '../../monitor/monitor';
import { GlucoseRecord } from '../../monitor/glucose/glucoserecord';



@Component({
  selector: 'page-glucose',
  templateUrl: 'glucose.html'
})
export class GlucoseRecordPage{
    Glucoserecords:GlucoseRecord[]=[];
    GlucoseDateTime:string="";
    glucoseConcentrationval:number;
    measuredMealTime:string="";
    addResult="";
  constructor(public navCtrl: NavController, params: NavParams,public renderer: Renderer, public viewCtrl: ViewController,public events:Events){
    this.getGlucoseProfile();
  }
  onPageDidEnter() {
     this.getGlucoseProfile();
     this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'Add-popup', true);
  }
  getGlucoseProfile(){
    if(localStorage.getItem("GlucoseProfile")!=null){
        this.Glucoserecords=JSON.parse(localStorage.getItem("GlucoseProfile"));
    }
  }
  saveGlucoseProfile(){
    this.getGlucoseProfile();
    var glucoseConcentration=this.glucoseConcentrationval;
    var dateTimeVal=this.GlucoseDateTime;
    var mealTime=this.measuredMealTime;

    this.Glucoserecords.push({glucoseConcentration,dateTimeVal,mealTime});
    this.Glucoserecords.sort(this.sortbyDate);
    localStorage.setItem("GlucoseProfile",JSON.stringify(this.Glucoserecords));
    this.glucoseConcentrationval=0;
    this.measuredMealTime="";
  this.addResult="Saved Successfully."
    this.raiseEvent();
  this.dismiss();
  }
 sortbyDate(obj1:GlucoseRecord,obj2:GlucoseRecord){  
    var dateA = new Date(obj1.dateTimeVal).getTime();
    var dateB = new Date(obj2.dateTimeVal).getTime();
    return dateA > dateB ? 1 : -1;  
}
clearResult(){
  this.addResult="";
}
  goToGlucoseDetails(){
    this.navCtrl.push(GlucoseDetailPage);
  }  
  goBack(){
      this.navCtrl.push(MonitorHomePage);
  }
    dismiss(){
      this.navCtrl.pop();
    }
    raiseEvent(){
     this.events.publish("glucose:added");
    }
}
