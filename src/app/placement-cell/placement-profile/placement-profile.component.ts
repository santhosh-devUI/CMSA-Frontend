import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/shared/service/faculty.service';
import { PlacementService } from 'src/app/shared/service/placement.service';

@Component({
  selector: 'app-placement-profile',
  templateUrl: './placement-profile.component.html',
  styleUrls: ['./placement-profile.component.scss']
})
export class PlacementProfileComponent implements OnInit {
company:any
  constructor(
    private placementService:PlacementService
  ) { }

  ngOnInit(): void {
    let email=JSON.parse(localStorage.getItem('placement')!).emailid
this.placementService.viewProfile(email).subscribe((res:any)=>{
  this.company=res
  
})
  }

}
