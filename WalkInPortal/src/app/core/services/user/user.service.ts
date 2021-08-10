import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEducationQualification, IPersonalInformation, IProfessionalQualification } from 'src/app/shared/models/user.model.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  personalInformationFilledVariable: boolean = false;
  qualificationInformationFilledVariable: boolean = false;

  personalInformationVariable: IPersonalInformation = {
    firstName: "",
    lastName: "",
    email: "",
    userImage: "",
    phoneCode: "",
    phoneNumber: "",
    resume: "",
    portfolioURL: "",
    preferredJobRoleList: [],
    referredBy: "",
    mailUpdates: true
  };

  educationalQualificationVariable: IEducationQualification = {
    aggregatePercetage: null,
    yearOfPassing: null,
    qualification: "",
    stream: "",
    collegeName: "",
    otherCollegeName: "",
    collegeLocation: ""
  }

  professionalQualificationVariable: IProfessionalQualification = {
    isUserExperienced:false,
    familiarTechnologyList: [],
    otherFamiliarTechnology: "",
    zeusTestAppeared: false,
    roleAppliedPreviously: "",

    // experienced user
    yearsOfExperience: null,
    currentCTC: null,
    expectedCTC: null,
    expertiseTechnologyList: [],
    otherExpertiseTechnology: "",
    onNoticePeriod: true,
    noticePeriodEndDate: "",
    noticePeriodDuration: ""
  }

  constructor() { }

  personalInformationFilled(){
    return this.personalInformationFilledVariable;
  }

  qualificationInformationFilled(){
    return this.qualificationInformationFilledVariable;
  }
}
