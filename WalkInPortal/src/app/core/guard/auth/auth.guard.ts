import { Injectable } from '@angular/core';
import {CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  canLoad(){
    // Write code to check user logged in or not
    return true;
  }
  
}
