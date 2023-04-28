import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss']
})
export class FacultyProfileComponent implements OnInit {
  faculty: any;
empid:any
AddEmpForm!: FormGroup;
photourl: any;
x: any;
  constructor( private facultyservice:FacultyService,private fb : FormBuilder) { }

  ngOnInit(): void {
    this.empid = JSON.parse(localStorage.getItem('faculty')!).empid
    
    this.facultyservice.ViewProfile(this.empid).subscribe((res:any)=>{
      this.faculty=res
      console.log(res);
    })
      
      this.AddEmpForm = this.fb.group({
        empid:['',[Validators.required]],
        name: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        mobileno: ['', [Validators.required]],
        emailid: ['', [Validators.required]],
        joiningdate: ['', [Validators.required]],
        yearofexperience: ['', [Validators.required]],
        designation: ['', [Validators.required]],
        department: ['', [Validators.required]],
        address: ['', [Validators.required]],
        photo: ['', [Validators.required]],
      });
    }
    onSelectFile(event: any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
          this.photourl = event.target?.result;
        };
      }
    }
Edit(){
  console.log(this.faculty);
  
  this.AddEmpForm.patchValue({
     empid : this.faculty.empid,
     name : this.faculty.name,
     gender : this.faculty.gender,
    emailid : this.faculty.emailid,
    mobileno : this.faculty.mobileno,
    dob : this.faculty.dob,
    designation:this.faculty.designation,
    department:this.faculty.department,
    yearofexperience:this.faculty.yearofexperience,
    joiningdate:this.faculty.joiningdate,
    address:this.faculty.address,

  })
}
    UpdateProfile(){
      let id=JSON.parse(localStorage.getItem('faculty')!)._id
this.facultyservice.EditProfile(id,this.AddEmpForm.value).subscribe((res:any)=>{
  alert('updated succesfully')
  window.location.reload()

  console.log(res);
  
})
    }
  }

