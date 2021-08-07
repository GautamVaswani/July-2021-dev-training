import { Injectable } from '@angular/core';
import { IEducationQualification, IPersonalInformation, IProfessionalQualification } from 'src/app/shared/models/user.model.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
