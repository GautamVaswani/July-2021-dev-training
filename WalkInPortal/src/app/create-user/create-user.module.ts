import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from '../header/header.module';

import { CreateUserComponent } from './create-user.component';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';
import { QualificationFormComponent } from './qualification-form/qualification-form.component';
import { FormReviewComponent } from './form-review/form-review.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    PersonalInformationFormComponent,
    QualificationFormComponent,
    FormReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CreateUserRoutingModule,
    HeaderModule
  ]
})
export class CreateUserModule { }
