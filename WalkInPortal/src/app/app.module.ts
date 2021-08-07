import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ApplicantDashboardModule } from './applicant-dashboard/applicant-dashboard.module';
import { CreateUserModule } from './create-user/create-user.module';
import { LoginModule } from './login/login.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ApplicantDashboardModule,
    CreateUserModule,
    LoginModule
  ],
  exports:[
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
