import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  isPersonalInformationFilled: boolean = false;
  isQualificationsFilled: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginRedirect(){
    this.router.navigateByUrl("login");
  }

  getOpacity(): number{
    if (this.isPersonalInformationFilled && this.isQualificationsFilled){
      return 1;
    }
    return 0.5;
  }

  clickHandler(){
    console.log("clicked");
  }

}
