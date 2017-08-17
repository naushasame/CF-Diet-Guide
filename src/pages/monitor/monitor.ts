import {Component }from '@angular/core'; 
import {NavController }from 'ionic-angular'; 

import {MedicalPage }from '../../pages/medical/medical'; 
import { MedicalDetailPage } from '../medical/medicaldetails';
import {HomePage }from '../../pages/home/home'; 
import {MealsRecordPage }from '../../pages/monitor/meals/meals'; 
import { MealDetailPage } from '../../pages/monitor/meals/mealsdetails';
import { GlucoseDetailPage } from '../../pages/monitor/glucose/glucosereadingsdetails';
import {EnzymeRecordPage }from '../../pages/monitor/enzyme/enzyme'; 
import { EnzymeDetailPage } from '../../pages/monitor/enzyme/enzymedetails';
import { VitaminDetailPage } from '../../pages/monitor/vitamins/vitamindetails'; 
import {StatsPage} from '../../pages/monitor/stats/stats';
import {MealSurprisePage} from  '../../pages/monitor/mealsuprise/mealsurprise';

@Component( {
selector:'page-monitorhome', 
templateUrl:'monitor.html'
})
export class MonitorHomePage {
username:string; 

constructor(public navCtrl:NavController) {

}
gotoMedical() {
this.navCtrl.push(MedicalDetailPage); 
}
goHome() {
this.navCtrl.push(HomePage); 
}
goToMealsHome() {
this.navCtrl.push(MealDetailPage); 
}
goToBloodsugarHome() {
this.navCtrl.push(GlucoseDetailPage); 
}
goToEnzymeHome() {
this.navCtrl.push(EnzymeDetailPage); 
}
goToVitaminsHome() {
this.navCtrl.push(VitaminDetailPage); 
}
goToStatssHome() {
this.navCtrl.push(StatsPage); 
}
gotoMealSurprise(){
    this.navCtrl.push(MealSurprisePage);
}
}
