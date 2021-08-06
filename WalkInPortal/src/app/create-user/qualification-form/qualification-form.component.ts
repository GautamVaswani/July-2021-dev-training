import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.css']
})
export class QualificationFormComponent implements OnInit {

  walkinIconBaseFolderURL: string = "../../../assets/Walk In Portal - Icons - Listing to Success flow/";
  quantumIconBaseFolderURL: string = "../../../assets/quantum screen assets/icons/";
  isEducationalQualificationExpanded: boolean = true;
  isProfessionalQualificationExpanded: boolean = true;


  // Education qualification input variiables
  aggregatePercentage: any;
  yearOfPassing: string = "";
  yearList: any; 
  qualification: string = "";
  qualificationList: string[] = []
  stream: string = "";
  streamList: string[] = [];
  college: string = "";
  collegeList: string[] = [];
  otherCollege: string = "";
  collegeLocation: string  = "";

  // Professional qualification input variables
  isUserExperienced: boolean = false;   // default user type fresher
  yearsOfExperience: any;
  currentCTC: any;
  expectedCTC: any;
  expertiseTechnologyList: string[] = [];
  otherExpertiseTechnology: string = "";

  familiarTechnologyList: string[] = [];
  otherFamiliarTechnology: string = "";

  inNoticePeriod: boolean = true;
  noticeEndDateCollege: string = "";
  noticeLength: string = "";
  appearedForTest: boolean = false;
  previouslyAppliedRole: string = "";

  constructor() {
    this.populateYearSelectInput();
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

  populateYearSelectInput(){
    let yearDropdown = document.getElementById('yearOfPassingInput');
    if(yearDropdown){
      let date = new Date();
      let year = date.getFullYear();
      for (let i = 1950; i <= year; i++) {
        this.yearList.push(i);
        // var option = document.createElement('option');
        // option.value = option.innerHTML = i.toString();
        // if (i === year) option.selected = true;
        // yearDropdown.appendChild(option);
      }
    }
  }
  
  radioChangehandler(event: any, className: string): void{
    console.log(className)
    if(className.includes("userType")){
      if(event.target.value === "Experienced"){
        this.isUserExperienced = true;
      }
      else{
        this.isUserExperienced = false;
      }
    }
    else if(className.includes("appearedForTest")){
      if(event.target.value === "Yes"){
        this.appearedForTest = true;
      }
      else{
        this.appearedForTest = false;
      }
    }
    else if(className.includes("noticePeriod")){
      if(event.target.value === "Yes"){
        this.inNoticePeriod = true;
      }
      else{
        this.inNoticePeriod = false;
      }
    }
  }

  checkBoxClickHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    let technology = document.querySelector(`.${className}`)?.getElementsByTagName("p")[0].innerText;
    if(checkbox && technology){
      if(className.includes("expertiseTech")){
        if(this.expertiseTechnologyList.includes(technology)){
          checkbox.src = `${this.quantumIconBaseFolderURL}checkbox-unchecked.svg`;
          this.expertiseTechnologyList = this.expertiseTechnologyList.filter(item => item !== technology);
        }
        else{
          checkbox.src = `${this.quantumIconBaseFolderURL}checkbox-checked.svg`; 
          this.expertiseTechnologyList.push(technology);
        }
        console.log("E", this.expertiseTechnologyList);
      }
      else if(className.includes("familiarTech")) {
        if(this.familiarTechnologyList.includes(technology)){
          checkbox.src = `${this.quantumIconBaseFolderURL}checkbox-unchecked.svg`;
          this.familiarTechnologyList = this.familiarTechnologyList.filter(item => item !== technology);
        }
        else{
          checkbox.src = `${this.quantumIconBaseFolderURL}checkbox-checked.svg`; 
          this.familiarTechnologyList.push(technology);
        }
        console.log("F",this.familiarTechnologyList);
      }
    } 
  }
}
