import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkin-details',
  templateUrl: './walkin-details.component.html',
  styleUrls: ['./walkin-details.component.css']
})
export class WalkinDetailsComponent implements OnInit {

  quantumIconBaseURL: string = "/assets/quantum-screen-assets/icons/";
  walkinIconBaseURL: string = "/assets/walk-in-portal-icons/";

  startDate = "10-July";
  endDate  = "21-July";

  // User selected values
  timeSlotSelected:string = "Time Slot 1";
  preferredJobRoles: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  radioChangehandler(event: any, className: string): void{
    if(className.includes("timeSlot")){
      this.timeSlotSelected = event.target.value;
    }
  }

  preferredJobRoleChangeHandler(className: string){
    let checkbox = document.querySelector(`.${className}`)?.getElementsByTagName("img")[0];
    let role = document.querySelector(`.${className}`)?.getElementsByTagName("p")[0].innerText;
    if(checkbox && role){
      
      if(this.preferredJobRoles.includes(role)){
        checkbox.src = `${this.quantumIconBaseURL}checkbox-unchecked.svg`;
        this.preferredJobRoles = this.preferredJobRoles.filter(item => item !== role);
      }
      else{
        checkbox.src = `${this.quantumIconBaseURL}checkbox-checked.svg`; 
        this.preferredJobRoles.push(role);
      }
      console.log(this.preferredJobRoles);
    } 
  }

}
