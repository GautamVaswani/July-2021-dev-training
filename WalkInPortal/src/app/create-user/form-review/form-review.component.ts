import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['../personal-information-form/personal-information-form.component.css', '../qualification-form/qualification-form.component.css', './form-review.component.css']
})
export class FormReviewComponent implements OnInit {

  walkinIconBaseFolderURL: string = "../../../assets/walk-in-portal-icons/";
  quantumIconFolderBaseURL: string = "../../../assets/quantum-screen-assets/icons/";

  // temporary
  yearList: number[] = [2020, 2021];
  qualificationList: string[] = ["Q1", "Q2"];
  streamList: string[] = ["S1", "S2"];
  collegeList: string[] = ["C1", "C2"];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
