import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkin-applied-successfully',
  templateUrl: './walkin-applied-successfully.component.html',
  styleUrls: ['./walkin-applied-successfully.component.css']
})
export class WalkinAppliedSuccessfullyComponent implements OnInit {

  walkinIconFolderBaseURL: string = "../../../assets/Walk In Portal - Icons - Listing to Success flow/";

  constructor() { }

  ngOnInit(): void {
  }

}
