import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-walkins',
  templateUrl: './all-walkins.component.html',
  styleUrls: ['./all-walkins.component.css']
})
export class AllWalkinsComponent implements OnInit {
  
  walkinIconBaseURL: string = "../../../assets/walk-in-portal-icons/";

  startDate = "10-July";
  endDate  = "21-July";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  walkinDetails(walkinId: any){
    // console.log(this.route)
    this.router.navigate([walkinId], { relativeTo: this.route });
  }

}
