import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.css']
})
export class QualificationFormComponent implements OnInit {

  walkinIconBaseFolderURL: string = "../../../assets/walk-in-portal-icons/";
  quantumIconBaseFolderURL: string = "../../../assets/quantum-screen-assets/icons/";
  isEducationalQualificationExpanded: boolean = true;
  isProfessionalQualificationExpanded: boolean = true;

  qualificationList: string[] = [];
  streamList: string[] = [];
  collegeList: string[] = [];

  constructor(public userService: UserService) {
    // this.populateYearSelectInput();
  }

  ngOnInit(): void {
    
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

  // populateYearSelectInput(){
  //   let yearDropdown = document.getElementById('yearOfPassingInput');
  //   if(yearDropdown){
  //     let date = new Date();
  //     let year = date.getFullYear();
  //     for (let i = 1990; i <= year; i++) {
  //       this.yearList.push(i);
  //       // var option = document.createElement('option');
  //       // option.value = option.innerHTML = i.toString();
  //       // if (i === year) option.selected = true;
  //       // yearDropdown.appendChild(option);
  //     }
  //   }
  // }
  
  radioChangehandler(event: any, className: string): void{
    console.log(className)
    if(className.includes("userType")){
      if(event.target.value === "Experienced"){
        this.userService.professionalQualificationVariable.isUserExperienced = true;
      }
      else{
        this.userService.professionalQualificationVariable.isUserExperienced = false;
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
    else if(className.includes("noticePeriod")){
      if(event.target.value === "Yes"){
        this.userService.professionalQualificationVariable.onNoticePeriod = true;
      }
      else{
        this.userService.professionalQualificationVariable.onNoticePeriod = false;
      }
    }
  }

  checkBoxClickHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    let technology = document.querySelector(`.${className}`)?.getElementsByTagName("p")[0].innerText;
    if(checkbox && technology){
      if(className.includes("expertiseTech")){
        if(this.userService.professionalQualificationVariable.expertiseTechnologyList.includes(technology)){
          checkbox.src = `${this.quantumIconBaseFolderURL}checkbox-unchecked.svg`;
          this.userService.professionalQualificationVariable.expertiseTechnologyList = 
          this.userService.professionalQualificationVariable.expertiseTechnologyList
          .filter(item => item !== technology);
        }
        else{
          checkbox.src = `${this.quantumIconBaseFolderURL}checkbox-checked.svg`; 
          this.userService.professionalQualificationVariable.expertiseTechnologyList.push(technology);
        }
      }
      else if(className.includes("familiarTech")) {
        if(this.userService.professionalQualificationVariable.familiarTechnologyList.includes(technology)){
          checkbox.src = `${this.quantumIconBaseFolderURL}checkbox-unchecked.svg`;
          this.userService.professionalQualificationVariable.familiarTechnologyList = 
          this.userService.professionalQualificationVariable.familiarTechnologyList
          .filter(item => item !== technology);
        }
        else{
          checkbox.src = `${this.quantumIconBaseFolderURL}checkbox-checked.svg`; 
          this.userService.professionalQualificationVariable.familiarTechnologyList.push(technology);
        }
      }
    } 
  }
}
