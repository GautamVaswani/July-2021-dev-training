import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateUserComponent } from './create-user.component';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';
import { QualificationFormComponent } from './qualification-form/qualification-form.component';
import { FormReviewComponent } from './form-review/form-review.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CreateUserComponent,
    PersonalInformationFormComponent,
    QualificationFormComponent,
    FormReviewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FormsModule,
    CreateUserRoutingModule
  ]
})
export class CreateUserModule { }
