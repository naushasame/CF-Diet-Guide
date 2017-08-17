import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';
import {CFDietGuide} from '../../app/app.component';
import { InitialPage } from '../../pages/initial/initial';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
    username:string=localStorage.getItem("appUserUsername");
    fullname:string="";
    dob:string="";
    diagnosedDate:string="";
    contactNo:string="";
    emergencyContactNo:string="";
    emergencyContactName:string="";
    emergencyContactRelavance:string="";
    HospitalEmergencyContactNo:string="";

    

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
    this.getProfile();
  }

  getProfile(){
    if(localStorage.getItem("appUserFullname")!=null){
      this.fullname=localStorage.getItem("appUserFullname");
    this.dob=localStorage.getItem("appUserDob");
    this.diagnosedDate=localStorage.getItem("appUserDiagnosedDate");
    this.contactNo=localStorage.getItem("appUserContactNo");
    this.emergencyContactNo=localStorage.getItem("appUserEmergencyContactNo");
    this.emergencyContactName=localStorage.getItem("appUserEmergencyContactName");
    this.emergencyContactRelavance=localStorage.getItem("appUserEmergencyContactRelavance");
    this.HospitalEmergencyContactNo=localStorage.getItem("appUserHospitalEmergencyContactNo");
    }
  }
  saveProfile(){
    localStorage.setItem("appUserFullname",this.fullname);
    localStorage.setItem("appUserDob",this.dob);
    localStorage.setItem("appUserDiagnosedDate",this.diagnosedDate);
    localStorage.setItem("appUserContactNo",this.contactNo);
    localStorage.setItem("appUserEmergencyContactNo",this.emergencyContactNo);
    localStorage.setItem("appUserEmergencyContactName",this.emergencyContactName);
    localStorage.setItem("appUserEmergencyContactRelavance",this.emergencyContactRelavance);
    localStorage.setItem("appUserHospitalEmergencyContactNo",this.HospitalEmergencyContactNo);
    this.presentSaved();
  }
  logOutMe(){
    this.username=null;
    this.fullname="";
    this.dob="dd/mm/yyyy";
    this.diagnosedDate=null;
    this.contactNo="";
    this.emergencyContactNo="";
    this.emergencyContactName="";
    this.emergencyContactRelavance="";
    this.HospitalEmergencyContactNo="";
    localStorage.setItem("appUserUsername",this.username);
    localStorage.setItem("appUserFullname",this.fullname);
    localStorage.setItem("appUserDob",this.dob);
    localStorage.setItem("appUserDiagnosedDate",this.diagnosedDate);
    localStorage.setItem("appUserContactNo",this.contactNo);
    localStorage.setItem("appUserEmergencyContactNo",this.emergencyContactNo);
    localStorage.setItem("appUserEmergencyContactName",this.emergencyContactName);
    localStorage.setItem("appUserEmergencyContactRelavance",this.emergencyContactRelavance);
    localStorage.setItem("appUserHospitalEmergencyContactNo",this.HospitalEmergencyContactNo);
    localStorage.removeItem("mealProfile");
    localStorage.removeItem("GlucoseProfile");
    localStorage.removeItem("EnzymeProfile");
    localStorage.removeItem("newEnzymes");
      this.navCtrl.push(CFDietGuide);
  }
 presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirm Delete',
    message: 'All Monitoring and Profile Data will be erased!. Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
         
        }
      },
      {
        text: 'Erase',
        handler: () => {
          this.logOutMe();
        }
      }
    ]
  });
  alert.present();
}
presentSaved() {
  let alert = this.alertCtrl.create({
    title: 'Profile Saved',
    subTitle: 'Your Profile is saved now.',
    buttons: ['Thanks']
  });
  alert.present();
}
}
