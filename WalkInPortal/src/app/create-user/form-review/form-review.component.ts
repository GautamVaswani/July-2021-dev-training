import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.css']
})
export class FormReviewComponent implements OnInit {

  walkinIconFolderBaseURL: string = "../../../assets/Walk In Portal - Icons - Listing to Success flow/";
  quantumIconFolderBaseURL: string = "../../../assets/quantum screen assets/icons/";

  constructor() { }

  ngOnInit(): void {
  }

}
