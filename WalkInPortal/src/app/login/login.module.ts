import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginBodyComponent } from './login-body/login-body.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginHeaderComponent,
    LoginBodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
