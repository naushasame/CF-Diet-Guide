import { Component,Renderer } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';
import { InitialPage } from '../../initial/initial';
import { MealRecord } from '../../monitor/meals/mealRecord';
import { MealDetailPage } from '../../monitor/meals/mealsdetails';
import { MonitorHomePage } from '../../monitor/monitor';





@Component({
  selector: 'page-meal',
  templateUrl: 'meals.html'
})
export class MealsRecordPage{
    mealrecords:MealRecord[]=[];
    mealDate:string="";
    mealType:string;
    mealDetails:string="";
    addResult="";
  constructor(public navCtrl: NavController, params: NavParams,public renderer: Renderer, public viewCtrl: ViewController,public events:Events) {
    this.getmealProfile();
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'Add-popup', true);
  }
  onPageDidEnter() {
     this.getmealProfile();
     this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'Add-popup', true);
  }
  getmealProfile(){
    if(localStorage.getItem("mealProfile")!=null){
        this.mealrecords=JSON.parse(localStorage.getItem("mealProfile"));
    }
  }
  savemealProfile(){
    this.getmealProfile();
    var mealDateVal=this.mealDate;
    var mealTypeVal=this.mealType;
    var mealDetailsVal=this.mealDetails;

    this.mealrecords.push({mealDateVal,mealTypeVal,mealDetailsVal});
    this.mealrecords.sort(this.sortbyDate);
    localStorage.setItem("mealProfile",JSON.stringify(this.mealrecords));
  this.mealType="";
  this.mealDetails="";
  this.addResult="Saved Successfully."
  this.raiseEvent();
  this.dismiss();
  }
sortbyDate(obj1:MealRecord,obj2:MealRecord){  
    var dateA = new Date(obj1.mealDateVal).getTime();
    var dateB = new Date(obj2.mealDateVal).getTime();
    return dateA > dateB ? 1 : -1;  
}
  goToMealDetails(){
    this.navCtrl.push(MealDetailPage);
  }  
  goBack(){
      this.navCtrl.push(MonitorHomePage);
  }
    dismiss(){
      this.navCtrl.pop();
    }
    raiseEvent(){
     this.events.publish("meal:added");
    }
}
