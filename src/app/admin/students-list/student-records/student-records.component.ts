import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-student-records',
  templateUrl: './student-records.component.html',
  styleUrls: ['./student-records.component.scss']
})
export class StudentRecordsComponent implements OnInit {
  SearchValue:any
  EEEList:any
  ECEList: any;
  CIVILList:any;
  MECHList: any;

  constructor(private Api:AdminService) { }

  ngOnInit(): void {
    this.Api.getStudents("EEE").subscribe((res:any)=>{
      this.EEEList=res
      console.log(this.EEEList,"EEE stu");  
    });
    this.Api.getStudents("ECE").subscribe((res:any)=>{
      this.ECEList=res
      console.log(this.ECEList,"ECE stu");  
    });
    this.Api.getStudents("CIVIL").subscribe((res:any)=>{
      this.CIVILList=res
      console.log(this.CIVILList,"CIVIL stu");  
    });
    this.Api.getStudents("MECH").subscribe((res:any)=>{
      this.MECHList=res
      console.log(this.MECHList,"MECH stu");  
    });
  }

  searchdata(){
    let FilteredValue = this.SearchValue

    this.Api.SearchStudents(FilteredValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.EEEList = res;      
    })
    this.Api.SearchStudents(FilteredValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.ECEList = res;      
    })
    this.Api.SearchStudents(FilteredValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.CIVILList = res;      
    })
    this.Api.SearchStudents(FilteredValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.MECHList = res;      
    })
  }

}
