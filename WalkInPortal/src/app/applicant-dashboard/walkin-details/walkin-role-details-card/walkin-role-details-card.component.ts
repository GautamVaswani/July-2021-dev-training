import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkin-role-details-card',
  templateUrl: './walkin-role-details-card.component.html',
  styleUrls: ['./walkin-role-details-card.component.css']
})
export class WalkinRoleDetailsCardComponent implements OnInit {

  quantumIconBaseURL: string = "/assets/quantum-screen-assets/icons/";
  walkinIconBaseURL: string = "/assets/walk-in-portal-icons/";

  isRoleDetailsExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  expandHeaderClickHandler(id: string){
    console.log(id)
    let arrow = document.querySelector(`#${id}`)?.getElementsByTagName("img")[0];
    if(arrow){
      if(this.isRoleDetailsExpanded){
        arrow.src = `${this.walkinIconBaseURL}expand_more_green.svg`;
      }
      else{
        arrow.src = `${this.walkinIconBaseURL}expand_less_green.svg`;
      }
      this.isRoleDetailsExpanded = !this.isRoleDetailsExpanded;
    } 
  }

}
