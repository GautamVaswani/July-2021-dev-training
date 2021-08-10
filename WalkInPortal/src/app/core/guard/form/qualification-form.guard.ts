import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class QualificationFormGuard implements CanActivate {

  constructor(private router: Router, private userServise: UserService){}
  canActivate(){
    if(this.userServise.personalInformationFilled()){
      return true;
    }
    else{
      return false;
    }
  }
  
}
