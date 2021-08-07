import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "createUser", redirectTo: "createUser"},
  { path: "applicantDashboard", redirectTo: "applicantDashboard"},
  { path: "", pathMatch: "full", redirectTo: "login"},
  { path: "**", pathMatch: "full", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
