import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.scss']
})
export class OfficerLoginComponent implements OnInit {
  officerloginForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private officerService:OfficerService
  ) { }

  ngOnInit(): void {
    this.officerloginForm=this.fb.group({
      empid:['',[Validators.required]],
      mobileno:['',[Validators.required]]
    })
  }
  officerLogin(){
    let emp=this.officerloginForm.value.empid
      let mobile=this.officerloginForm.value.mobileno
      let toe="officer"
      console.log(emp,mobile,toe);
      
    if(this.officerloginForm.valid){
       this.officerService.officerLogin(emp,mobile,toe).subscribe((res:any)=>{
        if(res){
          alert('success')
          console.log(res);
          
        }else{
          alert('login failed')
          console.log('error');
          
        }
       })
    }else{
      alert("please fill required")
    }
    
  }
}
