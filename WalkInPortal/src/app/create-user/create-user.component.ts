import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  isPersonalInformationFilled: boolean = false;
  isQualificationInformationFilled: boolean = false

  constructor(public userService:UserService ,private router: Router) {
    // this.userService.personalInformationFilledVariable.subscribe((value) => {      
    //   this.isPersonalInformationFilled = value;
    // });
    // this.userService.qualificationInformationFilledVariable.subscribe((value) =>{
    //   this.isQualificationInformationFilled = value;
    // });
  }

  ngOnInit(): void {
  }

  loginRedirect(){
    this.router.navigateByUrl("login");
  }

  setOpacity(): number{
    if (this.isPersonalInformationFilled && this.isQualificationInformationFilled){
      return 1;
    }
    return 0.5;
  }

  createAccount(){
    console.log("Create user clicked");
  }

}
