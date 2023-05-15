import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from '../shared/service/faculty.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-faculty-editprofile',
  templateUrl: './faculty-editprofile.component.html',
  styleUrls: ['./faculty-editprofile.component.scss']
})
export class FacultyEditprofileComponent implements OnInit {
  AddEmpForm!: FormGroup;
  photourl: any;
  x: any;
  this: any;
  
    constructor( private facultyservice:FacultyService,private fb : FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any) { }
  ngOnInit(): void {
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
    })
    this.AddEmpForm.patchValue({
      empid : this.data.empid,
      name : this.data.name,
      gender : this.data.gender,
     emailid : this.data.emailid,
     mobileno : this.data.mobileno,
     dob : this.data.dob,
     designation:this.data.designation,
     department:this.data.department,
     yearofexperience:this.data.yearofexperience,
     joiningdate:this.data.joiningdate,
     address:this.data.address,})
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

  UpdateProfile(){
let e ={
  empid : this.AddEmpForm.get('empid')?.value,
  name : this.AddEmpForm.get('name')?.value,
  gender : this.AddEmpForm.get('gender')?.value,
 emailid : this.AddEmpForm.get('emailid')?.value,
 mobileno : this.AddEmpForm.get('mobileno')?.value,
 dob : this.AddEmpForm.get('dob')?.value,
 designation:this.AddEmpForm.get('designation')?.value,
 department:this.AddEmpForm.get('department')?.value,
 yearofexperience:this.AddEmpForm.get('yearofexperience')?.value,
 joiningdate:this.AddEmpForm.get('joiningdate')?.value,
 address:this.AddEmpForm.get('address')?.value,
}
    let id=JSON.parse(localStorage.getItem('faculty')!)._id
this.facultyservice.EditProfile(id,e).subscribe((res:any)=>{
alert('updated succesfully')
window.location.reload()

console.log(res);

})
  }

}
