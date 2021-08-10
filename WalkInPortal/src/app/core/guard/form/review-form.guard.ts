import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewFormGuard implements CanActivate {
  constructor(private router: Router, private userServise: UserService){}
  canActivate(){
    if(this.userServise.qualificationInformationFilled()){
      return true;
    }
    else{
      return false;
    }
  }
  
}
