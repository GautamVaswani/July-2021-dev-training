import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.css']
})
export class PersonalInformationFormComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phoneCode: any;
  phoneNumber: any;
  portfolioURL: string = "";
  referralName: string = "";
  emailUpdates: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  mailUpdateChangeHandler(className: string){
    let element = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    if(element){
      if(this.emailUpdates){
        element.src = "../../../assets/quantum screen assets/icons/checkbox-unchecked.svg";
      }
      else{
        element.src = "../../../assets/quantum screen assets/icons/checkbox-checked.svg"; 
      }
      this.emailUpdates = !this.emailUpdates;
      console.log(this.emailUpdates);
    } 
  }

}
