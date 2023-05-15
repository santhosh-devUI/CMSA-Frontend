import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from '../shared/service/faculty.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-faculty-edittimetable',
  templateUrl: './faculty-edittimetable.component.html',
  styleUrls: ['./faculty-edittimetable.component.scss']
})
export class FacultyEdittimetableComponent implements OnInit {
  timetables: any;
  ttid:any

  constructor(private facultyservice : FacultyService,private fb : FormBuilder ,@Inject(MAT_DIALOG_DATA) public data:any) { }
  ViewttForm!:FormGroup
  ViewtimetableForm!:FormGroup
  ngOnInit(): void {
       this.ViewtimetableForm=this.fb.group({
        day:['',[Validators.required]],
        branch:['',[Validators.required]],
        hour1:['9:30-10:30',[Validators.required]],
        hour2:['10:30-11:30',[Validators.required]],
        hour3:['11:30-12:30',[Validators.required]],
        hour4:['1:30-4:30',[Validators.required]],
        subject1:['',[Validators.required]],
        subject2:['',[Validators.required]],
        subject3:['',[Validators.required]],
        lab:['',[Validators.required]],
        faculty1:['',[Validators.required]],
        faculty2:['',[Validators.required]],
        faculty3:['',[Validators.required]],
        labasst:['',[Validators.required]],
        })
        this.ViewtimetableForm.patchValue({
          day:this.data.day,
          branch:this.data.branch,
          hour1:this.data.hour1,
          hour2:this.data.hour2,
          hour3:this.data.hour3,
          hour4:this.data.hour4,
          subject1:this.data.subject1,
          subject2:this.data.subject2,
          subject3:this.data.subject3,
          lab:this.data.lab,
          faculty1:this.data.faculty1,
          faculty2:this.data.faculty2,
          faculty3:this.data.faculty3,
          labasst:this.data.labasst,
        })
  }
UpdateTT(){
  let id=this.data._id
  const e= {
    day:this.ViewtimetableForm.get('day')?.value,
    branch:this.ViewtimetableForm.get('branch')?.value,
    hour1:this.ViewtimetableForm.get('hour1')?.value,
    hour2:this.ViewtimetableForm.get('hour2')?.value,
    hour3:this.ViewtimetableForm.get('hour3')?.value,
    hour4:this.ViewtimetableForm.get('hour4')?.value,
    subject1:this.ViewtimetableForm.get('subject1')?.value,
    subject2:this.ViewtimetableForm.get('subject2')?.value,
    subject3:this.ViewtimetableForm.get('subject3')?.value,
    lab:this.ViewtimetableForm.get('lab')?.value,
    faculty1:this.ViewtimetableForm.get('faculty1')?.value,
    faculty2:this.ViewtimetableForm.get('faculty2')?.value,
    faculty3:this.ViewtimetableForm.get('faculty3')?.value,
    labasst:this.ViewtimetableForm.get('labasst')?.value,
  }
  this.facultyservice.EditTimetable(id,e).subscribe((res:any)=>{
    alert('updated succesfully')
    window.location.reload()
    console.log(res);
    
  })
}
}
