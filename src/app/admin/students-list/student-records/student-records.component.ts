import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-student-records',
  templateUrl: './student-records.component.html',
  styleUrls: ['./student-records.component.scss']
})
export class StudentRecordsComponent implements OnInit {
  SearchMECHValue:any
  SearchCIVILValue:any
  SearchECEValue:any
  SearchEEEValue:any
  EEEList:any
  ECEList: any;
  CIVILList:any;
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
  forCIVILStudents(){
    this.Api.getStudents("CIVIL").subscribe((res:any)=>{
      this.CIVILList=res
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
  searchCIVILdata(){
    this.Api.SearchStudents(this.SearchCIVILValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.CIVILList = res;      
    })
  }
  searchMECHdata(){
    this.Api.SearchStudents(this.SearchMECHValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.MECHList = res;      
    })
  }

}
