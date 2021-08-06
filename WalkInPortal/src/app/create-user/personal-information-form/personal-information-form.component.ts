import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.css']
})
export class PersonalInformationFormComponent implements OnInit {

  walkinIconFolderBaseURL: string = "../../../assets/Walk In Portal - Icons - Listing to Success flow/";
  quantumIconFolderBaseURL: string = "../../../assets/quantum screen assets/icons/";

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  portfolioURL: string = "";
  referralName: string = "";
  
  phoneCode: any;
  phoneNumber: any;

  preferredJobRoles: string[] = [];
  
  emailUpdates: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  preferredJobRoleChangeHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    let role = document.querySelector(`.${className}`)?.getElementsByTagName("p")[0].innerText;
    if(checkbox && role){
      
      if(this.preferredJobRoles.includes(role)){
        checkbox.src = "../../../assets/quantum screen assets/icons/checkbox-unchecked.svg";
        this.preferredJobRoles = this.preferredJobRoles.filter(item => item !== role);
      }
      else{
        checkbox.src = "../../../assets/quantum screen assets/icons/checkbox-checked.svg"; 
        this.preferredJobRoles.push(role);
      }
      console.log(this.preferredJobRoles);
    } 
  }

  mailUpdateChangeHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    if(checkbox){
      if(this.emailUpdates){
        checkbox.src = "../../../assets/quantum screen assets/icons/checkbox-unchecked.svg";
      }
      else{
        checkbox.src = "../../../assets/quantum screen assets/icons/checkbox-checked.svg"; 
      }
      this.emailUpdates = !this.emailUpdates;
      console.log(this.emailUpdates);
    } 
  }

}
