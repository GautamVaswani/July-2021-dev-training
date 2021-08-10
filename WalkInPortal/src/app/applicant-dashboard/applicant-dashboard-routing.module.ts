import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllWalkinsComponent } from './all-walkins/all-walkins.component';
import { ApplicantDashboardComponent } from './applicant-dashboard.component';
import { WalkinAppliedSuccessfullyComponent } from './walkin-applied-successfully/walkin-applied-successfully.component';
import { WalkinDetailsComponent } from './walkin-details/walkin-details.component';

const routes: Routes = [
  { path: "",
  component: ApplicantDashboardComponent,
    children: [
        { path: "walkins", component: AllWalkinsComponent},
        { path: "walkins/:id", component: WalkinDetailsComponent},
        { path: "walkinAppliedSuccessfully", component: WalkinAppliedSuccessfullyComponent},
        { path: "", pathMatch: "full" ,redirectTo: "walkins"},
        // { path: "**", redirectTo: "walkins"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantDashboardRoutingModule { }
export const routerComponents = [ApplicantDashboardComponent, AllWalkinsComponent, WalkinDetailsComponent, WalkinAppliedSuccessfullyComponent];
