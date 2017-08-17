import {Component,ViewChild }from '@angular/core'; 
import {NavController }from 'ionic-angular'; 
import { Chart } from 'chart.js';

import { BMIRecord } from '../../medical/bmirecord';
import { GlucoseRecord } from '../../monitor/glucose/glucoserecord';
import { MealRecord } from '../../monitor/meals/mealrecord';


@Component( {
  selector:'stats-home', 
  templateUrl:'stats.html'
})
export class StatsPage {

  @ViewChild('bmiCanvas') bmiCanvas;
  @ViewChild('glucoseCanvas') glucoseCanvas;
  @ViewChild('mealCanvas') mealCanvas;
  
  bmiChart:any;
  glucoseChart:any;
  mealChart:any;
  bmirecords:BMIRecord[]=[];
  Glucosesrecords:GlucoseRecord[]=[];
  mealsrecords:MealRecord[]=[];
  bmiDates:string[]=[];
  glucoseDates:string[]=[];
  mealTypes=["Break Fast","Lunch","Snack","Dinner"];
  numberOfBreakfast:number=0;
  numberOfLunch:number=0;
  numberOfSnack:number=0;
  numberOfDinner:number=0;
  
  bmiValues:number[]= [];
  glucoseValues:number[]=[];
  maxRecWeight:number=0;
  maxRecWeightDate:string;
  minRecWeight:number=0;
  minRecWeightDate:string;
  constructor(public navCtrl:NavController) {

  }
 getBMIProfile(){
    if(localStorage.getItem("BMIProfile")!=null){
        this.bmirecords=JSON.parse(localStorage.getItem("BMIProfile"));
        this.minRecWeight=this.bmirecords[0].weightval;
        for(var i=0;i<this.bmirecords.length;i++){
            if(this.bmirecords[i].weightval>this.maxRecWeight){
                this.maxRecWeight=this.bmirecords[i].weightval;
                this.maxRecWeightDate=this.bmirecords[i].dateval;
            }
            if(this.bmirecords[i].weightval<this.minRecWeight){
                this.minRecWeight=this.bmirecords[i].weightval;
                this.minRecWeightDate=this.bmirecords[i].dateval;
            }
          this.bmiDates.push(this.bmirecords[i].dateval);
          this.bmiValues.push(this.bmirecords[i].bmival);
        }
    }
  }
   getGlucoseProfile(){
    if(localStorage.getItem("GlucoseProfile")!=null){
        this.Glucosesrecords=JSON.parse(localStorage.getItem("GlucoseProfile"));
        for(var i=0;i<this.Glucosesrecords.length;i++){
          this.glucoseDates.push(this.Glucosesrecords[i].dateTimeVal);
          this.glucoseValues.push(this.Glucosesrecords[i].glucoseConcentration);
        }
    }
  }
 getmealProfile(){
    if(localStorage.getItem("mealProfile")!=null){
        this.mealsrecords=JSON.parse(localStorage.getItem("mealProfile"));

        for(var i=0;i<this.mealsrecords.length;i++){
          if(this.mealsrecords[i].mealTypeVal.includes("Break Fast")){this.numberOfBreakfast+=1;}
          else if(this.mealsrecords[i].mealTypeVal=="Lunch"){this.numberOfLunch+=1;}
          else if(this.mealsrecords[i].mealTypeVal=="Snack"){this.numberOfSnack+=1;}
          else if(this.mealsrecords[i].mealTypeVal=="Dinner"){this.numberOfDinner+=1;}
          
        }
    }

  }
    ionViewDidLoad() {
      this.getBMIProfile();
      this.getGlucoseProfile();
      this.getmealProfile();
      this.bmiChart=new Chart(this.bmiCanvas.nativeElement,{
 
            type: 'line',
            data: {
                labels:this.bmiDates,
                datasets: [
                    {
                        label: "BMI Trend",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data:this.bmiValues,
                        spanGaps: false,
                    }
                ]
            }
 
        });
        this.glucoseChart=new Chart(this.glucoseCanvas.nativeElement,{
 
            type: 'line',
            data: {
                labels:this.glucoseDates,
                datasets: [
                    {
                        label: "Blood Glucose Trend",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data:this.glucoseValues,
                        spanGaps: false,
                    }
                ]
            }
 
        });

         this.mealChart = new Chart(this.mealCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: this.mealTypes,
                datasets: [{
                    label: '# of Votes',
                    data: [this.numberOfBreakfast, this.numberOfLunch,this.numberOfSnack, this.numberOfDinner],
                    backgroundColor: [
                         "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#2F6380"
                        
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ]
                }]
            }
 
        });


    }

}
