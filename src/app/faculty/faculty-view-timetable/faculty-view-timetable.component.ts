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

  constructor(private facultyservice : FacultyService,private fb : FormBuilder) { }
  ViewttForm!:FormGroup
  ngOnInit(): void {
       this.ViewttForm=this.fb.group({
        branch:['',[Validators.required]]
       })
    
  }
  deletett(t:any){
    this.facultyservice.DeleteTimetable(t).subscribe((res:any)=>{
alert("Deleted Succcess" )
console.log(res)
    })
  }
  search(){
    this.facultyservice.ViewTimetable(this.ViewttForm.value.branch).subscribe((res:any)=>{
      this.timetables=res
      console.log(res);
      
    })
  }
   

}
