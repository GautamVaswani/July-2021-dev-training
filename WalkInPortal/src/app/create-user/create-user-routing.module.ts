import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user.component';
import { FormReviewComponent } from './form-review/form-review.component';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';
import { QualificationFormComponent } from './qualification-form/qualification-form.component';

const routes: Routes = [
  { path: "createUser",
    component: CreateUserComponent,
    children: [
        { path: "personalInformationForm", component: PersonalInformationFormComponent},
        { path: "qualificationForm", component: QualificationFormComponent},
        { path: "reviewForm", component: FormReviewComponent},
        { path: "", pathMatch: "full" ,redirectTo: "personalInformationForm"},
        { path: "**", redirectTo: "qualificationForm"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUserRoutingModule { }
