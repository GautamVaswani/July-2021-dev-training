import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.css']
})
export class LoginBodyComponent implements OnInit {

  email: string = "";
  password: string = "";

  rememberMe: boolean = true;
  iconFolderUrl: string = "../../../assets/quantum-screen-assets/icons/";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Click handler
  clickHandler(className: string){
    if(className.includes("forgot") && className.includes("email")){
      this.forgotEmailMethod();
    }
    else if(className.includes("forgot") && className.includes("password")){
      this.forgotPasswordMethod();
    }
    else if(className.includes("preview")){
      this.previewPasswordMethod();
    }
    else if(className.includes("remember")){
      this.rememberMeMethod();
    }
    else if(className.includes("login")){
      this.loginMethod();
    }
    else if(className.includes("create")){
      this.createAccountMethod(); 
    }
    else if(className.includes("about")){
      this.aboutUsMethod();
    }
    else if(className.includes("contact")){
      this.contactUsMethod();
    }
    
  }

  // Click Functions
  forgotEmailMethod(){
    console.log("Forgot email clicked");
  }

  forgotPasswordMethod(){
    console.log("Forgot password clicked");
  }

  previewPasswordMethod(){
    let element = document.querySelector(`.password`);
      if(element){
        let passwordField = element.getElementsByTagName("input")[0];
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        let img = element.getElementsByTagName("img")[0];
        if(type == 'text'){
          img.src =  this.iconFolderUrl + "preview-hide.svg";
        }
        else{
          img.src =  this.iconFolderUrl + "preview-show.svg";
        }
      }
      // console.log("show-hide clicked");
  }

  rememberMeMethod(){
    let element = document.querySelector(".rememberMe")?.getElementsByTagName("img")[0];
      if(element){
        if(this.rememberMe){
          element.src = this.iconFolderUrl + "checkbox-unchecked.svg";
        }
        else{
          element.src = this.iconFolderUrl + "checkbox-checked.svg"; 
        }
        this.rememberMe = !this.rememberMe;
        // console.log(this.rememberMe);
      }
  }

  loginMethod(){
    if(this.email.length != 0 && this.password.length !=0){
      this.router.navigateByUrl("applicantDashboard");
    }
  }

  createAccountMethod(){
    // console.log("Create account clicked");
    this.router.navigateByUrl("createUser");
  }

  aboutUsMethod(){
    console.log("About us clicked");
  }

  contactUsMethod(){
    console.log("Contact us clicked");
  }

}
