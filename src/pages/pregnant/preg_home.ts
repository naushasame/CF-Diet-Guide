import {Component }from '@angular/core'; 
import {NavController }from 'ionic-angular'; 
import {HomePage }from '../../pages/home/home'; 

@Component( {
  selector:'page-preg-home', 
  templateUrl:'preg_home.html'
})
export class PregHomePage {
shownQuestion=null;
  constructor(public navCtrl: NavController) {

  }
toggleQuestion(question) {
    if (this.isQuestionShown(question)) {
        this.shownQuestion = null;
    } else {
        this.shownQuestion = question;
    }
};
isQuestionShown(question) {
    return this.shownQuestion === question;
};
  goHome(){
      this.navCtrl.push(HomePage);
  }

}