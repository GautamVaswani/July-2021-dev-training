import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../header/header.module';

import { ApplicantDashboardComponent } from './applicant-dashboard.component';

@NgModule({
  declarations: [
    ApplicantDashboardComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class ApplicantDashboardModule { }
