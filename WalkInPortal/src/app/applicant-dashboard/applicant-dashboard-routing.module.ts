import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllWalkinsComponent } from './all-walkins/all-walkins.component';
import { ApplicantDashboardComponent } from './applicant-dashboard.component';
import { WalkinAppliedSuccessfullyComponent } from './walkin-applied-successfully/walkin-applied-successfully.component';
import { WalkinDetailsComponent } from './walkin-details/walkin-details.component';

const routes: Routes = [
  { path: "applicantDashboard",
  component: ApplicantDashboardComponent,
    children: [
        { path: "allWalkins", component: AllWalkinsComponent},
        { path: "walkinDetails", component: WalkinDetailsComponent},
        { path: "walkinAppliedSuccessfully", component: WalkinAppliedSuccessfullyComponent},
        { path: "", pathMatch: "full" ,redirectTo: "walkinDetails"},
        { path: "**", redirectTo: "allWalkins"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantDashboardRoutingModule { }
