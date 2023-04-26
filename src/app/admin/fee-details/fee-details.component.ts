import { AdminService } from 'src/app/shared/service/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.scss']
})
export class FeeDetailsComponent implements OnInit {
  SearchValue:any
  EEEfee: any;
  ECEfee:any;
  MECHfee:any;
  CIVILfee:any;
  collegeFee: any;


  constructor(private Api:AdminService) { }

  ngOnInit(): void {
    this.Api.ShowFee().subscribe((res:any)=>{
      this.collegeFee = res;
    })
    this.Api.Branchwisefee("EEE").subscribe((res:any)=>{
      this.EEEfee = res;
      console.log(res,"EEE");
    })
    this.Api.Branchwisefee("ECE").subscribe((res:any)=>{
      this.ECEfee = res;
      console.log(res,"ECE");
    })
    this.Api.Branchwisefee("MECH").subscribe((res:any)=>{
      this.MECHfee = res;
      console.log(res,"MECH");
    })
    this.Api.Branchwisefee("CIVIL").subscribe((res:any)=>{
      this.CIVILfee = res;
      console.log(res,"CIVIL");
    })
  }
  searchdata(){
    let FilteredValue = this.SearchValue

    this.Api.SearchStudentsFee(FilteredValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.EEEfee = res;      
    })
    this.Api.SearchStudentsFee(FilteredValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.ECEfee = res;      
    })  
    this.Api.SearchStudentsFee(FilteredValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.MECHfee = res;      
    })
    this.Api.SearchStudentsFee(FilteredValue).subscribe((res:any)=>{
      console.log(res,"filtervalue");
      this.CIVILfee = res;      
    })
  }

}
