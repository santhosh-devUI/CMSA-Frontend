import { Component, OnInit } from '@angular/core';
import { SuperadminService } from 'src/app/shared/service/superadmin.service';

@Component({
  selector: 'app-s-view-fee',
  templateUrl: './s-view-fee.component.html',
  styleUrls: ['./s-view-fee.component.scss']
})
export class SViewFeeComponent implements OnInit {
  Totalfee: any;
  collegeFee: any;
  Studentfee: any;
  searchvalue: any;

  constructor(private Api:SuperadminService) { }

  ngOnInit(): void {
    this.Api.viewFee().subscribe((res:any)=>{
      this.collegeFee = res;  
    })
    this.Api.StudentTotalfee("EEE").subscribe((res:any)=>{
      this.Totalfee = res;
    })
    // this.Api.StudentFee().subscribe((res:any)=>{
    //   this.Studentfee = res;
    // })
  }

}
