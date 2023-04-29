import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.scss']
})
export class AddOfficerComponent implements OnInit {
  AddOfficerForm!:FormGroup;
  photourl: any;
  aadharurl:any
  x:any;

  constructor(private fb:FormBuilder,private Api:AdminService,private Routes:Router) { }
  

  ngOnInit(): void {
    this.AddOfficerForm = this.fb.group({
      name:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      typeofemployee:['officer',[Validators.required]],
      joiningdate:['',[Validators.required]],
      qualification:['',[Validators.required]],
      yearofexperience:['',[Validators.required]],
      designation:['',[Validators.required]],
      department:['',[Validators.required]],
      salary:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      pincode:['',[Validators.required]],
      bankname:['',[Validators.required]],
      bankaccountno:['',[Validators.required]],
      ifsccode:['',[Validators.required]],
      branchname:['',[Validators.required]],
      pancardno:['',[Validators.required]],
      photo:['',[Validators.required]],
      aadharcopy:['',[Validators.required]]
    })
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.photourl = event.target?.result;
      }
    }
  }

  onSelectAadharFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.aadharurl = event.target?.result;
      }
    }
  }
  AddOfficer(){
     this.x = 'EMP' + Math.floor((Math.random() * 10000) + 1);
    let data ={
      ...this.AddOfficerForm.value,
      empid:this.x,
      photo:this.photourl,
      aadharcopy:this.aadharurl
    }

    if(this.AddOfficerForm.valid){
      this.Api.addOfficer(data).subscribe((res:any)=>{
        if(res){
          alert("officer Register Successfull")
          window.location.reload()
        }else{
          alert('something went wrong')
        }
      })
    }

  }

}
