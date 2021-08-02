import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user.component';
import { FormReviewComponent } from './form-review/form-review.component';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';
import { QualificationFormComponent } from './qualification-form/qualification-form.component';

const routes: Routes = [
  { path: "create user",
    component: CreateUserComponent,
    children: [
        { path: "", pathMatch: "full" ,redirectTo: "personal information form"},
        { path: "personal information form", component: PersonalInformationFormComponent},
        { path: "qualification form", component: QualificationFormComponent},
        { path: "review form", component: FormReviewComponent},
        { path: "**", redirectTo: "personal information form"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUserRoutingModule { }
