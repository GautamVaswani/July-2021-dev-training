import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.css']
})
export class QualificationFormComponent implements OnInit {

  walkinIconBaseFolderURL: string = "../../../assets/walk-in-portal-icons/";
  quantumIconFolderBaseURL: string = "../../../assets/quantum-screen-assets/icons/";
  isEducationalQualificationExpanded: boolean = true;
  isProfessionalQualificationExpanded: boolean = true;

  yearList: number[] = [2020, 2021];
  qualificationList: string[] = ["Q1", "Q2"];
  streamList: string[] = ["S1", "S2"];
  collegeList: string[] = ["C1", "C2"];
  

  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) {
    // this.populateYearSelectInput();
  }

  ngOnInit(): void {
    
  }

  saveQualificationInformation(formState: boolean){
    if(formState){
      this.userService.qualificationInformationFilledVariable = true;
      this.router.navigate(['../','reviewForm'],{ relativeTo: this.route });
    }
    else{
      console.log("Form not filled, please enter the form details!");
    }
  }

  qualificationHeaderClickHandler(className: string){
    let arrow = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    if(className.includes("educational")){
    }
    if(arrow){
      if(className.includes("educational")){
        if(this.isEducationalQualificationExpanded){
          arrow.src = `${this.walkinIconBaseFolderURL}expand_more_green.svg`;
        }
        else{
          arrow.src = `${this.walkinIconBaseFolderURL}expand_less_green.svg`;
        }
        this.isEducationalQualificationExpanded = !this.isEducationalQualificationExpanded;
      }
      else if(className.includes("professional")){
        if(this.isProfessionalQualificationExpanded){
          arrow.src = `${this.walkinIconBaseFolderURL}expand_more_green.svg`;
        }
        else{
          arrow.src = `${this.walkinIconBaseFolderURL}expand_less_green.svg`;
        }
        this.isProfessionalQualificationExpanded = !this.isProfessionalQualificationExpanded;
      }
    } 
  }

  populateYearSelectInput(){
    let yearDropdown = document.getElementById('yearOfPassingInput');
    if(yearDropdown){
      let date = new Date();
      let year = date.getFullYear();
      for (let i = 1990; i <= year; i++) {
        this.yearList.push(i);
      }
    }
  }
  
  radioChangehandler(event: any, className: string): void{
    if(className.includes("userType")){
      if(event.target.value === "Experienced"){
        this.userService.professionalQualificationVariable.isUserExperienced = true;
      }
      else{
        this.userService.professionalQualificationVariable.isUserExperienced = false;
      }
    }
    else if(className.includes("noticePeriod")){
      if(event.target.value === "Yes"){
        this.userService.professionalQualificationVariable.onNoticePeriod = true;
      }
      else{
        this.userService.professionalQualificationVariable.onNoticePeriod = false;
      }
    }
    else if(className.includes("appearedForTest")){
      if(event.target.value === "Yes"){
        this.userService.professionalQualificationVariable.zeusTestAppeared = true;
      }
      else{
        this.userService.professionalQualificationVariable.zeusTestAppeared = false;
      }
    }
  }

  checkBoxClickHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    let technology = document.querySelector(`.${className}`)?.getElementsByTagName("p")[0].innerText;
    if(checkbox && technology){
      if(className.includes("expertiseTech")){
        if(this.userService.professionalQualificationVariable.expertiseTechnologyList.includes(technology)){
          this.userService.professionalQualificationVariable.expertiseTechnologyList = 
          this.userService.professionalQualificationVariable.expertiseTechnologyList
          .filter(item => item !== technology);
        }
        else{
          this.userService.professionalQualificationVariable.expertiseTechnologyList.push(technology);
        }
      }
      else if(className.includes("familiarTech")) {
        if(this.userService.professionalQualificationVariable.familiarTechnologyList.includes(technology)){
          this.userService.professionalQualificationVariable.familiarTechnologyList = 
          this.userService.professionalQualificationVariable.familiarTechnologyList
          .filter(item => item !== technology);
        }
        else{
          this.userService.professionalQualificationVariable.familiarTechnologyList.push(technology);
        }
      }
    } 
  }
}
