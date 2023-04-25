import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { log } from 'console';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-view-officer',
  templateUrl: './view-officer.component.html',
  styleUrls: ['./view-officer.component.scss']
})
export class ViewOfficerComponent implements OnInit {
  OfficerList:any;

  constructor(private Api:AdminService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Api.getOfficer().subscribe((res:any)=>{
      this.OfficerList = res;
      console.log(this.OfficerList,"officer");
      
    })
  }

}
