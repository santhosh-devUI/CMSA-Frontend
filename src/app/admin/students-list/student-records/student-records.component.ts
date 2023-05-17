import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-student-records',
  templateUrl: './student-records.component.html',
  styleUrls: ['./student-records.component.scss']
})
export class StudentRecordsComponent implements OnInit {
  SearchMECHValue:any
  SearchCSEValue:any
  SearchECEValue:any
  SearchEEEValue:any
  EEEList:any
  ECEList: any;
  CSEList:any;
  MECHList: any;

  constructor(private Api:AdminService) { }

  ngOnInit(): void {
  
    this.forEEEStudents()
    
    
  }
  forEEEStudents(){
    this.Api.getStudents("EEE").subscribe((res:any)=>{
      this.EEEList=res 
    });
  }
  forECEStudents(){
    this.Api.getStudents("ECE").subscribe((res:any)=>{
      this.ECEList=res
    });
  }
  forCSEStudents(){
    this.Api.getStudents("CSE").subscribe((res:any)=>{
      this.CSEList=res
    });
  }
  forMECHStudents(){
    this.Api.getStudents("MECH").subscribe((res:any)=>{
      this.MECHList=res
    });
  }
  searchEEEdata(){
    this.Api.SearchStudents(this.SearchEEEValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.EEEList = res;      
    })
  }
  searchECEdata(){
    this.Api.SearchStudents(this.SearchECEValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.ECEList = res;      
    })
  }
  searchCSEdata(){
    this.Api.SearchStudents(this.SearchCSEValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.CSEList = res;      
    })
  }
  searchMECHdata(){
    this.Api.SearchStudents(this.SearchMECHValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.MECHList = res;      
    })
  }

}
