import {Component,ViewChild }from '@angular/core'; 
import {NavController }from 'ionic-angular'; 
import { Chart } from 'chart.js';

import { BMIRecord } from '../../medical/bmirecord';
import { GlucoseRecord } from '../../monitor/glucose/glucoserecord';
import { MealRecord } from '../../monitor/meals/mealrecord';


@Component( {
  selector:'mealsurprise-home', 
  templateUrl:'mealsurprise.html'
})
export class MealSurprisePage {
    breakfasts:string[]=[
        "Cereal with full cream milk and sugar and orange juice",
        "Toast/crumpets/croissants with butter/margarine and jam/marmalade/honey/cheese/peanut butter",
        "Beans/cheese/scrambled or fried eggs on toast",
        "Fried sausage, bacon and eggs with hash browns or fried bread",
        "Omelette with filling e.g. ham, cheese, tomato, mushrooms. Serve with bread/toast and margarine or butter",
        "Tinned mini sausages and baked beans or ravioli with toast and margarine or butter"

    ];
    lunches:string[]=[
        "Ready meal/pizza/sausage roll/fish fingers/pasty and chips",
        "Baked beans/cheese/scrambled or fried eggs on toast",
        "Sandwiches with meat/tinned fish/cheese with bag of crisps",
        "Jacket potato with olive oil/ butter and baked beans/cheese or curry/chillicon carne",
        "Whole milk yogurt/chocolate bar/cake",
        "Shepherd’s pie, hot-pot or casserole with tinned or frozen vegetables",
        "Microwave curry or chilli served with naan or pitta bread",
        "Lasagne, pasta bake, macaroni cheese",
        "Ready made Yorkshire pudding with minced beef, chicken casserole or sausage and gravy filling"
    ];
    snacks:string[]=[
        "Milkshake/fizzy drink/fruit juice/glass of whole milk/coffee, hot chocolateor malted drink made with milk",
        "Biscuits/cake/crisps/dried fruit and nuts/chocolate bar/cheese and crackers/ sandwiches / individual fruit pies/ crisps and dips/ peanuts / toast / yogurt",
        "Sponge pudding with custard or fresh or tinned fruit with double cream or ice cream",
        "Milk pudding with jam or syrup/thick and creamy yogurt/individual trifle or dessert/cheesecake/gateaux",
        "Cheese and biscuits",
        "Puddings – microwavable sponge puddings, crumbles served with tinned or packet custard, tinned rice pudding, whole milk yogurts, or tinned fruit in syrup served with ice cream",
        "Grated cheese with pickle/chutney or onion/mayonnaise",
        "Ham, cheese and tomato",
        "Salmon, tuna or prawns with salad and mayonnaise",
        "Cream cheese with pineapple, raisins or chopped dates",
        "Cream cheese with chives, chopped onion and salad",
        "Avocado and bacon",
        "Egg mayonnaise",
        "Cheese and coleslaw",
        "Hummus and salad",
        "Chicken, bacon and mayonnaise",
        "Peanut butter and jam/mashed banana and honey"
    ];
    dinners:string[]=[
        "Baked beans or tinned spaghetti on toast with grated cheese",
        "Pizza with extra grated cheese",
        "Ready prepared quiche, pork pie, pasty or sausage roll with salad and mayonnaise or olive oil dressing",
        "Cold meat/ready cooked chicken with oven or microwave chips",
        "Cooked pasta tossed in olive oil with ready prepared sauces (always try to buy cheese or cream based varieties)",
        ""
    ];
    dinnerIdea:string="Dinner";
    snackIdea:string="Snack";
    lunchIdea:string="Lunch";
    breakfastIdea:string="Breakfast";
    
  constructor(public navCtrl:NavController) {

  }
 
    ionViewDidLoad() {
        
        this.dinnerIdea=this.dinners[Math.floor(Math.random() * this.dinners.length) + 0];
        this.snackIdea=this.snacks[Math.floor(Math.random() * this.snacks.length) + 0];
        this.lunchIdea=this.lunches[Math.floor(Math.random() * this.lunches.length) + 0];
        this.breakfastIdea=this.breakfasts[Math.floor(Math.random() * this.breakfasts.length) + 0];
    }

}
