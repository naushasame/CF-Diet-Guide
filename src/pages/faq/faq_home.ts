import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-faq-home',
  templateUrl: 'faq_home.html'
})
export class FaqHomePage {
  shownQuestion=null;
faqs = [
  { question: "What is Cystic Fibrosis(CF) ?", answer: "One of the UK's most common life-threatening inherited diseases that is Caused by a defective gene. Due to this disease, lungs and digestive system become clogged with thick sticky mucus causing chronic infections and inflammation in the lungs and difficulty digesting food." },
	{ question: "How Common is CF ?", answer: "Around 10,800 people in the UK have this disease. That is,1 in every 2,500 babies born or around 100,000 people in the world." },
	{ question: "What Causes CF ?", answer: "It is a genetic condition. 1 in 25 people carries the faulty CF gene. i.e. Over two million people in the UK carry this gene. A Child has a one-in-four chance of having CF if both parents are carriers. " },
	{ question: "Diagnosis", answer: "Babies are Screened shortly after birth(heel-prick blood test).  Around one in 10 children with CF are diagnosed before, at, or shortly after birth, due to a condition called meconium ileus(Urgent surgery Required). Some children born earlier than 2007 may be diagnosed later in life." },
	{ question: "Symptoms of CF", answer: "Some of these symptoms are seen: Persistent cough,Wheezing,Shortness of breath and breathing difficulties,Repeated chest infections,Malnutrition, poor growth and poor weight gain,Bloated abdomen and tummy aches,Constipation and prolonged diarrhea,Sinus infections and nasal polyps,Diabetes (CFRD), arthritis, osteoporosis and liver problems." },
	{ question: "Types of CF", answer: "There are over 2,00 identified mutations of the CF gene. Some suffer more with their digestive system than the lungs. Others have no problem with their pancreas." },
	{ question: "Ethnic and CF", answer: "More common in the Caucasian population. Affects people of many ethnic backgrounds." },
	{ question: "Life Expectancy", answer: "This is different for people of different ages. Median predicted survival stands at 41 years old. This means a baby born today can be expected to live longer." }	
  ];
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
