import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {
  EEEfaculty: any;
  ECEfaculty: any;
  CIVILfaculty: any;
  MECHfaculty: any;


  constructor(private Api:AdminService) { }

  ngOnInit(): void {
    this.Api.ShowFaculty("EEE").subscribe((res:any)=>{
      this.EEEfaculty = res;
      console.log(res,"EEE"); 
    })
    this.Api.ShowFaculty("ECE").subscribe((res:any)=>{
      this.ECEfaculty = res;
      console.log(res,"ECE"); 
    })
    this.Api.ShowFaculty("CIVIL").subscribe((res:any)=>{
      this.CIVILfaculty = res;
      console.log(res,"CIVIL"); 
    })
    this.Api.ShowFaculty("MECH").subscribe((res:any)=>{
      this.MECHfaculty = res;
      console.log(res,"MECH"); 
    })
  }

}
