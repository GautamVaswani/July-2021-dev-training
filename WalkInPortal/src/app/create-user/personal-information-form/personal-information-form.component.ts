import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.css']
})
export class PersonalInformationFormComponent implements OnInit {

  walkinIconFolderBaseURL: string = "/assets/walk-in-portal-icons/";
  quantumIconFolderBaseURL: string = "/assets/quantum-screen-assets/icons/";

  constructor(public userService: UserService) { }
  ngOnInit(): void {
  }

  preferredJobRoleChangeHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    let role = document.querySelector(`.${className}`)?.getElementsByTagName("p")[0].innerText;
    if(checkbox && role){
      
      if(this.userService.personalInformationVariable.preferredJobRoleList.includes(role)){
        checkbox.src = `${this.quantumIconFolderBaseURL}checkbox-unchecked.svg`;
        this.userService.personalInformationVariable.preferredJobRoleList = 
        this.userService.personalInformationVariable.preferredJobRoleList
        .filter(item => item !== role);
      }
      else{
        checkbox.src = `${this.quantumIconFolderBaseURL}checkbox-checked.svg`; 
        this.userService.personalInformationVariable.preferredJobRoleList.push(role);
      }
    } 
  }

  mailUpdateChangeHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    if(checkbox){
      if(this.userService.personalInformationVariable.mailUpdates){
        checkbox.src = `${this.quantumIconFolderBaseURL}checkbox-unchecked.svg`;
      }
      else{
        checkbox.src = `${this.quantumIconFolderBaseURL}checkbox-checked.svg`; 
      }
      this.userService.personalInformationVariable.mailUpdates 
      = !this.userService.personalInformationVariable.mailUpdates;
      console.log(this.userService.personalInformationVariable);
    } 
  }

}
