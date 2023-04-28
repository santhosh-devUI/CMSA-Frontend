import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-view-timetable',
  templateUrl: './faculty-view-timetable.component.html',
  styleUrls: ['./faculty-view-timetable.component.scss']
})
export class FacultyViewTimetableComponent implements OnInit {
  timetables: any;
  ttid:any

  constructor(private facultyservice : FacultyService,private fb : FormBuilder) { }
  ViewttForm!:FormGroup
  ViewtimetableForm!:FormGroup
  ngOnInit(): void {
let branch=JSON.parse(localStorage.getItem('faculty')!).department
    this.facultyservice.ViewTimetable(branch).subscribe((res:any)=>{
      this.timetables=res
      console.log(res);
      
    })
    
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
  }
  deletett(t:any){
    this.facultyservice.DeleteTimetable(t).subscribe((res:any)=>{
alert("Deleted Succcess" )
window.location.reload()

console.log(res)
    })
  }
  search(){
    
  }
 
Edit(tt:any){
  console.log(tt);
  
this.ttid=tt._id
console.log(this.ttid);

  this.ViewtimetableForm.patchValue({
    day:tt.day,
    branch:tt.branch,
    hour1:tt.hour1,
    hour2:tt.hour2,
    hour3:tt.hour3,
    hour4:tt.hour4,
    subject1:tt.subject1,
    subject2:tt.subject2,
    subject3:tt.subject3,
    lab:tt.lab,
    faculty1:tt.faculty1,
    faculty2:tt.faculty2,
    faculty3:tt.faculty3,
    labasst:tt.labasst,
   })
}


UpdateTT(){
  console.log(this.ViewtimetableForm.value, this.ttid)
  this.facultyservice.EditTimetable(this.ttid,this.ViewtimetableForm.value).subscribe((res:any)=>{
    alert('updated succesfully')
    window.location.reload()

    console.log(res);
    
  })
}
}
