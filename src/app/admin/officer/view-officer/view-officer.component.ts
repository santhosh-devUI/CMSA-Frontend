import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { log } from 'console';
import { AdminService } from 'src/app/shared/service/admin.service';
import { EditOfficerComponent } from '../edit-officer/edit-officer.component';
import { DeleteOfficerComponent } from '../delete-officer/delete-officer.component';

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
    })
  }
  editOfficer(e:any){
    this.dialog.open(EditOfficerComponent,{
      width:"70%",
      height:"70%",
      data:e
    })
  }
  deleteOfficer(d:any){
    this.dialog.open(DeleteOfficerComponent,{
      width:"30%",
      data:d
    })
  }
}
