import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.css']
})
export class PersonalInformationFormComponent implements OnInit {

  walkinIconBaseFolderURL: string = "/assets/walk-in-portal-icons/";
  quantumIconFolderBaseURL: string = "/assets/quantum-screen-assets/icons/";

  // @Output() personalInformationFilledEvent = new EventEmitter();

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

  preferredJobRoleChangeHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    let role = document.querySelector(`.${className}`)?.getElementsByTagName("p")[0].innerText;
    if(checkbox && role){
      
      if(this.userService.personalInformationVariable.preferredJobRoleList.includes(role)){
        this.userService.personalInformationVariable.preferredJobRoleList = 
        this.userService.personalInformationVariable.preferredJobRoleList
        .filter(item => item !== role);
      }
      else{
        this.userService.personalInformationVariable.preferredJobRoleList.push(role);
      }
    } 
  }

  mailUpdateChangeHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    if(checkbox){
      this.userService.personalInformationVariable.mailUpdates 
      = !this.userService.personalInformationVariable.mailUpdates;
      console.log(this.userService.personalInformationVariable);
    } 
  }

  savePersonalInformation(formState: boolean){
    // this.personalInformationFilledEvent.emit(true);
    if(formState){
      this.userService.personalInformationFilledVariable = true;
      this.router.navigate(['../','qualificationForm'],{ relativeTo: this.route });
    }
    else{
      console.log("Form not filled, please enter the form details!");
      // this.router.navigate(['../','personalInformationForm'],{ relativeTo: this.route });
    }
    
  }

}
