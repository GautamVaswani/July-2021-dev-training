import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantDashboardComponent } from './applicant-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ApplicantDashboardRoutingModule } from './applicant-dashboard-routing.module';
import { AllWalkinsComponent } from './all-walkins/all-walkins.component';
import { WalkinDetailsComponent } from './walkin-details/walkin-details.component';
import { WalkinAppliedSuccessfullyComponent } from './walkin-applied-successfully/walkin-applied-successfully.component';
import { WalkinRoleDetailsCardComponent } from './walkin-details/walkin-role-details-card/walkin-role-details-card.component';

@NgModule({
  declarations: [
    ApplicantDashboardComponent,
    AllWalkinsComponent,
    WalkinDetailsComponent,
    WalkinAppliedSuccessfullyComponent,
    WalkinRoleDetailsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApplicantDashboardRoutingModule
  ]
})
export class ApplicantDashboardModule { }
