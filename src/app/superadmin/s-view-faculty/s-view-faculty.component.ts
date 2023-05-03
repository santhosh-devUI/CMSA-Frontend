import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';

@Component({
  selector: 'app-s-view-faculty',
  templateUrl: './s-view-faculty.component.html',
  styleUrls: ['./s-view-faculty.component.scss']
})
export class SViewFacultyComponent implements OnInit {
  EEEfaculty: any;
  ECEfaculty: any;
  CIVILfaculty: any;
  MECHfaculty: any;

  constructor(private Api:SuperadminService) { }

  ngOnInit(): void {
    this.Api.getFaculty("EEE").subscribe((res:any)=>{
      this.EEEfaculty = res;
    })
    this.Api.getFaculty("ECE").subscribe((res:any)=>{
      this.ECEfaculty = res;
    })
    this.Api.getFaculty("CIVIL").subscribe((res:any)=>{
      this.CIVILfaculty = res;
    })
    this.Api.getFaculty("MECH").subscribe((res:any)=>{
      this.MECHfaculty = res;
    })
  }

}
