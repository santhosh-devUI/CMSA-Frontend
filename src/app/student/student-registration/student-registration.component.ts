import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {
  
  constructor( private fb :FormBuilder) { }
 studentRegistration = this.fb.group({
     firstname:['',[Validators.required]],
     lastname:['',[Validators.required]],
     gender:['',[Validators.required]],
     dob:['',[Validators.required]],
     mobileno:['',[Validators.required]],
     emailid:['',[Validators.required]],
     hallticket:['',[Validators.required]],
     religion:['',[Validators.required]],
     caste :['',[Validators.required]],
     parentname :['',[Validators.required]],
     parentprofession:['',[Validators.required]],
     parentsmobileno:['',[Validators.required]],
     familyincome:['',[Validators.required]],
     address:['',[Validators.required]],
     city:['',[Validators.required]],
     state:['',[Validators.required]],
     eamcetrank:['',[Validators.required]],
     branch:['',[Validators.required]],
     typeofStudent:['',[Validators.required]],
     photo :['',[Validators.required]],
     aadharcopy:['',[Validators.required]],
     allotmentorder:['',[Validators.required]],
     adminssionfee:['',[Validators.required]],
     status:['',[Validators.required]],
     
  })
  ngOnInit(): void {
  }
submit(){
this.studentRegistration.value
console.log(this.studentRegistration.value,'s')
}
}

