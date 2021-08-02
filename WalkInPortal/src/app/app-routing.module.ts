import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantDashboardComponent } from './applicant-dashboard/applicant-dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login"},
  { path: "login", component: LoginComponent},
  { path: "create user", pathMatch: "full", redirectTo: "create user"},
  { path: "applicant dashboard", component: ApplicantDashboardComponent},
  { path: "**", pathMatch: "full", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
