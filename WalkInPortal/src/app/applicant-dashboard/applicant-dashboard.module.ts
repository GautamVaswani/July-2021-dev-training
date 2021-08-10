import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ApplicantDashboardRoutingModule, routerComponents} from './applicant-dashboard-routing.module';
import { WalkinRoleDetailsCardComponent } from './walkin-details/walkin-role-details-card/walkin-role-details-card.component';

@NgModule({
  declarations: [
    routerComponents,
    WalkinRoleDetailsCardComponent
  ],
  imports: [
    SharedModule,
    ApplicantDashboardRoutingModule
  ]
})
export class ApplicantDashboardModule { }
