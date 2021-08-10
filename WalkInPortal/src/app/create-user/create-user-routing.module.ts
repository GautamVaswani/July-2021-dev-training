import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualificationFormGuard } from '../core/guard/form/qualification-form.guard';
import { ReviewFormGuard } from '../core/guard/form/review-form.guard';
import { CreateUserComponent } from './create-user.component';
import { FormReviewComponent } from './form-review/form-review.component';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';
import { QualificationFormComponent } from './qualification-form/qualification-form.component';

const routes: Routes = [
  { path: "",
    component: CreateUserComponent,
    children: [
        { path: "personalInformationForm", component: PersonalInformationFormComponent},
        { path: "qualificationForm", component: QualificationFormComponent, canActivate: [QualificationFormGuard]},
        { path: "reviewForm", component: FormReviewComponent, canActivate: [ReviewFormGuard] },
        { path: "", pathMatch: "full" ,redirectTo: "personalInformationForm"},
        // { path: "**", redirectTo: "personalInformationForm"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUserRoutingModule { }
export const routingComponents = [CreateUserComponent, PersonalInformationFormComponent, QualificationFormComponent, FormReviewComponent];
