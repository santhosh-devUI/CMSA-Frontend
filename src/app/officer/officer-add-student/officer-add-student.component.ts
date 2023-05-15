import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-add-student',
  templateUrl: './officer-add-student.component.html',
  styleUrls: ['./officer-add-student.component.scss'],
})
export class OfficerAddStudentComponent implements OnInit {
  studentRegForm!: FormGroup;
  htn: any;
  photourl: any;
  aadharurl: any;
  AOurl: any;
  fees: any;
  constructor(
    private fb: FormBuilder,
    private officerApi: OfficerService,
    private Routes: Router
  ) {}

  ngOnInit(): void {
    this.officerApi.viewFees().subscribe((res: any) => {
      res.map((f:any)=>{
        this.fees =f;
      })
     
      console.log(this.fees);
      
    });
    this.studentRegForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      hallticket: ['', [Validators.required]],
      religion: ['', [Validators.required]],
      caste: ['', [Validators.required]],
      parentname: ['', [Validators.required]],
      parentprofession: ['', [Validators.required]],
      parentsmobileno: ['', [Validators.required]],
      familyincome: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      eamcetrank: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      typeofStudent: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      aadharcopy: ['', [Validators.required]],
      allotmentorder: ['', [Validators.required]],
      adminssionfee: ['', [Validators.required]],
      status: ['Paid', [Validators.required]],
    });
  }

  onSelectPhotoFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.photourl = event.target?.result;
      };
    }
  }

  onSelectAadharFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.aadharurl = event.target?.result;
      };
    }
  }
  onSelectAltmtOrderFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.AOurl = event.target?.result;
      };
    }
  }

  studentReg() {
let o = JSON.parse(localStorage.getItem('officer')!).empid

    let data = {
      ...this.studentRegForm.value,
      photo: this.photourl,
      aadharcopy: this.aadharurl,
      allotmentorder: this.AOurl,
    };
    let feedata = {
      hallticket: this.studentRegForm.value.hallticket,
      studentname: this.studentRegForm.value.firstname,
      branch: this.studentRegForm.value.branch,
      admissionfee: this.fees.admissionfee,
      admissionfeestatus: 'paid',
      collegefee: this.fees.collegefee,
      collegefeestatus:'due' ,
      libraryfee: this.fees.libraryfee,
      libraryfeestatus: 'due',
      jntufee:this.fees.jntufee,
      jntufeestatus: 'due',
      busfee:this.fees.busfee,
      busfeestatus: 'due',
      hostelfee: this.fees.hostelfee,
      hostelfeestatus:'due' ,
      clearedby: o,
    };
    this.officerApi.addStudents(data).subscribe((res: any) => {
      this.officerApi.addstudentFee(feedata).subscribe((result:any)=>{

      })
      alert('Student Added Successfully...');
    });
  }
}
