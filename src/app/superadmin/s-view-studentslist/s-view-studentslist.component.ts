import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';

@Component({
  selector: 'app-s-view-studentslist',
  templateUrl: './s-view-studentslist.component.html',
  styleUrls: ['./s-view-studentslist.component.scss']
})
export class SViewStudentslistComponent implements OnInit {
  EEEStudentsdata: any;
  ECEStudentsdata:any;
  CIVILStudentsdata:any;
  MECHStudentsdata:any;

  constructor(private Api:SuperadminService) { }

  ngOnInit(): void {
    this.forEEEstd()
  }
  forEEEstd(){
    this.Api.getStudents("EEE").subscribe((res:any)=>{
      this.EEEStudentsdata = res      
    })
  }
  forECEstd(){
    this.Api.getStudents("ECE").subscribe((res:any)=>{
      this.ECEStudentsdata = res      
    })
  }
  forCIVILstd(){
    this.Api.getStudents("CIVIL").subscribe((res:any)=>{
      this.CIVILStudentsdata = res      
    })
  }
  forMECHstd(){
    this.Api.getStudents("MECH").subscribe((res:any)=>{
      this.MECHStudentsdata = res      
    })
  }
  

}
