import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent},
  { path: "createUser", redirectTo: "createUser"},
  { path: "applicantDashboard", redirectTo: "applicantDashboard"},
  { path: 'createUser', loadChildren: () => import("./create-user/create-user.module").then(m => m.CreateUserModule) },
  { path: 'applicantDashboard', canLoad:[AuthGuard], loadChildren: () => import("./applicant-dashboard/applicant-dashboard.module").then(m => m.ApplicantDashboardModule)},
  { path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
