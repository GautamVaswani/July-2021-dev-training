export interface IPersonalInformation{
    firstName: string;
    lastName: string;
    email:string;
    userImage: string;
    phoneCode: string;
    phoneNumber: string;
    resume: string;
    portfolioURL: string;
    preferredJobRoleList: string[];
    referredBy: string;
    mailUpdates: boolean;
}

export interface IEducationQualification{
    aggregatePercetage: number | null;
    yearOfPassing: number | null;
    qualification: string;
    stream: string;
    collegeName: string;
    collegeLocation: string;
}

export interface IProfessionalQualification{
    // common details
    isUserExperienced: boolean;
    familiarTechnologyList: string[];
    otherFamiliarTechnology: string;
    zeusTestAppeared: boolean;
    roleAppliedPreviously: string;

    // experienced user
    yearsOfExperience: number | null;
    currentCTC: number | null;
    expectedCTC: number | null;
    expertiseTechnologyList: string[];
    otherExpertiseTechnology: string;
    onNoticePeriod: boolean;
    noticePeriodEndDate: string;
    noticePeriodDuration: string;

}