import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-walkins',
  templateUrl: './all-walkins.component.html',
  styleUrls: ['./all-walkins.component.css']
})
export class AllWalkinsComponent implements OnInit {
  
  walkinIconBaseURL: string = "../../../assets/Walk In Portal - Icons - Listing to Success flow/";

  startDate = "10-July";
  endDate  = "21-July";

  constructor() { }

  ngOnInit(): void {
  }

}
