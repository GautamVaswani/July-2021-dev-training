import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkin-applied-successfully',
  templateUrl: './walkin-applied-successfully.component.html',
  styleUrls: ['./walkin-applied-successfully.component.css']
})
export class WalkinAppliedSuccessfullyComponent implements OnInit {

  walkinIconBaseFolderURL: string = "../../../assets/walk-in-portal-icons/";

  constructor() { }

  ngOnInit(): void {
  }

}
