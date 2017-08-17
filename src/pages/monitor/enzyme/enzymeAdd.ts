import { Component,Renderer } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';


import { EnzymeRecordPage } from '../../monitor/enzyme/enzyme';
import { NewEnzymeRecord } from '../../monitor/enzyme/newenzyme';
import { MonitorHomePage } from '../../monitor/monitor';


@Component({
  selector: 'page-enzymeAdd',
  templateUrl: 'enzymeAdd.html'
})
export class EnzymeAddPage{
    newEnzymes:NewEnzymeRecord[]=[];
    newEnzyme:string="";
    
    addResult="";
 constructor(public navCtrl: NavController, params: NavParams,public renderer: Renderer, public viewCtrl: ViewController,public events:Events){
     this.getEnzymeProfile();
  }
  onPageDidEnter() {
     this.getEnzymeProfile();
      this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'Add-popup', true);
  }
   getEnzymeProfile(){
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
  saveEnzyme(){
    var enzymeNameVal=this.newEnzyme;
    this.newEnzymes.push({enzymeNameVal});
    localStorage.setItem("newEnzymes",JSON.stringify(this.newEnzymes));
    this.newEnzyme="";
   this.addResult="Saved Successfully.";
  this.raiseEvent();
  this.dismiss();
  }

clearResult(){
  this.addResult="";
}
 deleteEnzyme(index: number) {
        this.newEnzymes.splice(index, 1);
        localStorage.setItem("newEnzymes", JSON.stringify(this.newEnzymes));
    }
resetEnzymeDefault(){
        this.goBack();
}
  goBack(){
      this.navCtrl.push(MonitorHomePage);
  }
    dismiss(){
      this.navCtrl.pop();
    }
    raiseEvent(){
     this.events.publish("enzyme:added");
    }
}
