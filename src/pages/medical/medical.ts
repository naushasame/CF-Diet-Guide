import { Component,Renderer } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';

import { InitialPage } from '../initial/initial';
import { HomePage } from '../../pages/home/home';
import { BMIRecord } from '../medical/bmirecord';
import { MedicalDetailPage } from '../medical/medicaldetails';
import { MonitorHomePage } from '../../pages/monitor/monitor';

@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html'
})
export class MedicalPage {
    bmirecords:BMIRecord[]=[];
    height:any=0;
    weight:any=0;
    date:string="";
    addResult="Status:";
  constructor(public navCtrl: NavController, params: NavParams,public renderer: Renderer, public viewCtrl: ViewController,public events:Events) {

    this.getBMIProfile();
  }
  onPageDidEnter() {
     this.getBMIProfile();
     this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'Add-popup', true);
  }
  getBMIProfile(){
    if(localStorage.getItem("BMIProfile")!=null){
        this.bmirecords=JSON.parse(localStorage.getItem("BMIProfile"));
    }
  }


  saveBMIProfile(){
    this.getBMIProfile();
    var bmival:number;
    var weightval=this.weight;
    var heightval=this.height;
    var dateval=this.date;
    bmival=weightval/((heightval/100)*(heightval/100));
   this.bmirecords.push({heightval,weightval,bmival,dateval});
   this.bmirecords.sort(this.sortbyDate);
   localStorage.setItem("BMIProfile",JSON.stringify(this.bmirecords));
  this.height=0;
  this.weight=0;
  this.date="";
  this.addResult="Saved Successfully."
  this.raiseEvent();
  this.dismiss();
  }
 sortbyDate(obj1:BMIRecord,obj2:BMIRecord){  
    var dateA = new Date(obj1.dateval).getTime();
    var dateB = new Date(obj2.dateval).getTime();
    return dateA > dateB ? 1 : -1;  
}
  goToMedicalDetails(){
    this.navCtrl.push(MedicalDetailPage);
  }
  
  goBack(){
      this.navCtrl.push(MonitorHomePage);
  }
    dismiss(){
      this.navCtrl.pop();
    }
    raiseEvent(){
     this.events.publish("bmi:added");
    }
}
