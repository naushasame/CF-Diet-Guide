import { Component } from '@angular/core';
import { NavController,ModalController, NavParams, ViewController,Events } from 'ionic-angular';
import { MealRecord } from '../../monitor/meals/mealrecord';
import { MealsRecordPage } from '../../monitor/meals/meals';


@Component({
  selector: 'page-mealdetails',
  templateUrl: 'mealsdetails.html'
})
export class MealDetailPage {
    mealsrecords:MealRecord[]=[];
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public events:Events) {
    events.subscribe('meal:added',()=>{this.getmealProfile();});
    this.getmealProfile();
  }
  public getmealProfile(){
    if(localStorage.getItem("mealProfile")!=null){
        this.mealsrecords=JSON.parse(localStorage.getItem("mealProfile"));
    }

  }
  onPageDidEnter() {
     this.getmealProfile();
     this.events.subscribe('meal:added',()=>{this.getmealProfile();});
  }
  
  delete(index: number) {
        this.mealsrecords.splice(index, 1);
        localStorage.setItem("mealProfile", JSON.stringify(this.mealsrecords));
    }
  goBack(){
      this.navCtrl.pop(); 
  }
    goToAdd(){
      let AddModal = this.modalCtrl.create(MealsRecordPage);
      AddModal.present();
      //this.navCtrl.push(MealsRecordPage);
    }
}
