import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CFDietGuide } from './app.component';
import {NumericModule} from 'ionic2-numericpicker';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { InitialPage } from '../pages/initial/initial';
import { AdultHomePage } from '../pages/adult/adult_home';
import { InfantHomePage } from '../pages/infant/infant_home';
import { KidsHomePage } from '../pages/kids/kids_home';
import { PregHomePage } from '../pages/pregnant/preg_home';
import { OtherHomePage } from '../pages/others/other_home';
import { FaqHomePage } from '../pages/faq/faq_home';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { ProfilePage } from '../pages/profile/profile';
import { MedicalPage } from '../pages/medical/medical';
import { MedicalDetailPage } from '../pages/medical/medicaldetails';
import { MonitorHomePage } from '../pages/monitor/monitor';
import { MealsRecordPage } from '../pages/monitor/meals/meals';
import { MealDetailPage } from '../pages/monitor/meals/mealsdetails';
import { GlucoseRecordPage } from '../pages/monitor/glucose/glucosereadings';
import { GlucoseDetailPage } from '../pages/monitor/glucose/glucosereadingsdetails';
import { EnzymeDetailPage } from '../pages/monitor/enzyme/enzymedetails';
import { EnzymeRecordPage } from '../pages/monitor/enzyme/enzyme';
import { EnzymeAddPage } from '../pages/monitor/enzyme/enzymeadd';
import { VitaminRecordPage } from '../pages/monitor/vitamins/vitamin';
import { VitaminDetailPage } from '../pages/monitor/vitamins/vitamindetails';
import {StatsPage} from '../pages/monitor/stats/stats';
import { TabsPage } from '../pages/tabs/tabs';
import {MealSurprisePage} from  '../pages/monitor/mealsuprise/mealsurprise';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    CFDietGuide,
    AboutPage,
    HomePage,
    InitialPage,
    AdultHomePage,
    InfantHomePage,
    KidsHomePage,
    PregHomePage,
    OtherHomePage,
    FaqHomePage,
    DisclaimerPage,
    ProfilePage,
    MedicalPage,
    MedicalDetailPage,
    MonitorHomePage,
    MealsRecordPage,
    MealDetailPage,
    GlucoseRecordPage,
    GlucoseDetailPage,
    EnzymeDetailPage,
    EnzymeRecordPage,
    EnzymeAddPage,
    VitaminRecordPage,
    VitaminDetailPage,
    StatsPage,
    TabsPage,
    MealSurprisePage
  ],
  imports: [
    BrowserModule,
    NumericModule,
    IonicModule.forRoot(CFDietGuide,{mode:'md'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CFDietGuide,
    AboutPage,
    HomePage,
    InitialPage,
    AdultHomePage,
    InfantHomePage,
    KidsHomePage,
    PregHomePage,
    OtherHomePage,
    FaqHomePage,
    DisclaimerPage,
    ProfilePage,
    MedicalPage,
    MedicalDetailPage,
    MonitorHomePage,
    MealsRecordPage,
    MealDetailPage,
    GlucoseRecordPage,
    GlucoseDetailPage,
    EnzymeDetailPage,
    EnzymeRecordPage,
    EnzymeAddPage,
    VitaminRecordPage,
    VitaminDetailPage,
    StatsPage,
    TabsPage,
    MealSurprisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
