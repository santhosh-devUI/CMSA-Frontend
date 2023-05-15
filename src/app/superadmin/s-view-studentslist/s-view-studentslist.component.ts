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
  CSEStudentsdata:any;
  MECHStudentsdata:any;
  SearchMECHValue:any
  SearchCSEValue:any
  SearchECEValue:any
  SearchEEEValue:any

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
  forCSEstd(){
    this.Api.getStudents("CSE").subscribe((res:any)=>{
      this.CSEStudentsdata = res      
    })
  }
  forMECHstd(){
    this.Api.getStudents("MECH").subscribe((res:any)=>{
      this.MECHStudentsdata = res      
    })
  }
  
  searchEEEdata(){
    this.Api.SearchStudents(this.SearchEEEValue).subscribe((res:any)=>{
      this.EEEStudentsdata = res      
    })
  }
  searchECEdata(){
    this.Api.SearchStudents(this.SearchECEValue).subscribe((res:any)=>{
      this.ECEStudentsdata = res      
    })
  }
  searchCSEdata(){
    this.Api.SearchStudents(this.SearchCSEValue).subscribe((res:any)=>{
      this.CSEStudentsdata = res      
    })
  }
  searchMECHdata(){
    this.Api.SearchStudents(this.SearchMECHValue).subscribe((res:any)=>{
      this.MECHStudentsdata = res     
    })
  }
}
