import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';

@Component({
  selector: 'app-s-view-officer',
  templateUrl: './s-view-officer.component.html',
  styleUrls: ['./s-view-officer.component.scss']
})
export class SViewOfficerComponent implements OnInit {
  OfficerList: any;

  constructor(private Api:SuperadminService) { }

  ngOnInit(): void {
    this.Api.getOfficer().subscribe((res:any)=>{
      this.OfficerList = res; 
    })
  }

}
