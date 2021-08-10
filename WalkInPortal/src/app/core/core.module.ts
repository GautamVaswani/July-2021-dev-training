import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user/user.service';
import { WalkinService } from './services/walkin/walkin.service';
import { QualificationFormGuard } from './guard/form/qualification-form.guard';
import { ReviewFormGuard } from './guard/form/review-form.guard';
import { AuthGuard } from './guard/auth/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UserService, WalkinService, AuthGuard, QualificationFormGuard, ReviewFormGuard]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}
