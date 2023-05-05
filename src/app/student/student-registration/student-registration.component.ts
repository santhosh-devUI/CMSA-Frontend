import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss'],
})
export class StudentRegistrationComponent implements OnInit {
  studentRegistration!: FormGroup;
  htn: any;
  photourl: any;
  aadharurl: any;
  AOurl: any;
  constructor(
    private fb: FormBuilder,
    private officerApi: OfficerService,
    private Routes: Router
  ) {}

  ngOnInit(): void {
    this.studentRegistration = this.fb.group({
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
      status: ['pending', [Validators.required]],
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
    let data = {
      ...this.studentRegistration.value,
      photo: this.photourl,
      aadharcopy: this.aadharurl,
      allotmentorder: this.AOurl,
    };
    this.officerApi.addStudents(data).subscribe((res: any) => {
      alert("Student Added Successfully...")
    });
  }
}
