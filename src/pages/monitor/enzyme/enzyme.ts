import { Component,Renderer } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';

import { EnzymeDetailPage } from '../../monitor/enzyme/enzymedetails';
import { MonitorHomePage } from '../../monitor/monitor';
import { EnzymeRecord } from '../../monitor/enzyme/enzymerecord';
import { EnzymeAddPage } from '../../monitor/enzyme/enzymeadd';
import { NewEnzymeRecord } from '../../monitor/enzyme/newenzyme';

@Component({
  selector: 'page-enzyme',
  templateUrl: 'enzyme.html'
})
export class EnzymeRecordPage{
    enzymerecords:EnzymeRecord[]=[];
    newEnzymes:NewEnzymeRecord[]=[];
    dateTime:string="";
    enzymeName:string;
    mealTime:string="";
    doses:string;
    addResult="";
     constructor(public navCtrl: NavController, params: NavParams,public modalCtrl: ModalController,public renderer: Renderer, public viewCtrl: ViewController,public events:Events){
    events.subscribe('enzyme:added',()=>{this.getEnzymeProfile();});
    this.getEnzymeProfile();
  }
  onPageDidEnter() {
     this.events.subscribe('enzyme:added',()=>{this.getEnzymeProfile();});
     this.getEnzymeProfile();
     this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'Add-popup', true);
  }
   getEnzymeProfile(){
    if(localStorage.getItem("EnzymeProfile")!=null){
        this.enzymerecords=JSON.parse(localStorage.getItem("EnzymeProfile"));
    }
     this.getNewEnzymeProfile();
  }
  getNewEnzymeProfile(){
    if(localStorage.getItem("newEnzymes")!=null){
        this.newEnzymes=JSON.parse(localStorage.getItem("newEnzymes"));
    }
    else{
      var enzymeNameVal="Creon";
      this.newEnzymes.push({enzymeNameVal});
      enzymeNameVal="Nutrizym";
      this.newEnzymes.push({enzymeNameVal});
      enzymeNameVal="Cotazyme 100";
      this.newEnzymes.push({enzymeNameVal});
      enzymeNameVal="Cotazyme";
      this.newEnzymes.push({enzymeNameVal}); 
       localStorage.setItem("newEnzymes",JSON.stringify(this.newEnzymes));
      }
  }
  saveEnzymeProfile(){
     this.getNewEnzymeProfile();
    var dateTimeVal=this.dateTime;
    var enzymeNameVal=this.enzymeName;
    var mealTimeVal=this.mealTime;
    var dosesVal=this.doses;

    this.enzymerecords.push({dateTimeVal,enzymeNameVal,mealTimeVal,dosesVal})
    this.enzymerecords.sort(this.sortbyDate);
    localStorage.setItem("EnzymeProfile",JSON.stringify(this.enzymerecords));
    this.enzymeName="";
    this.mealTime="";
    this.doses="";
  this.addResult="Saved Successfully."
     this.raiseEvent();
  this.dismiss();
  }
   sortbyDate(obj1:EnzymeRecord,obj2:EnzymeRecord){  
    var dateA = new Date(obj1.dateTimeVal).getTime();
    var dateB = new Date(obj2.dateTimeVal).getTime();
    return dateA > dateB ? 1 : -1;  
}
clearResult(){
  this.addResult="";
}
  goToEnzymeDetails(){
    this.navCtrl.push(EnzymeDetailPage);
  }  
  goToAddAnEnzyme(){
    let myModal = this.modalCtrl.create(EnzymeAddPage);
    myModal.present();
   // this.navCtrl.push(EnzymeAddPage);
  }
  goBack(){
      this.navCtrl.push(MonitorHomePage);
  }
    dismiss(){
      this.navCtrl.pop();
    }
    raiseEvent(){
     this.events.publish("enzymeRecord:added");
    }
}
