import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CreateUserRoutingModule, routingComponents } from './create-user-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    SharedModule,
    FormsModule,
    CreateUserRoutingModule
  ]
})
export class CreateUserModule { }
