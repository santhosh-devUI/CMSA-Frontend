import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-view-marks',
  templateUrl: './faculty-view-marks.component.html',
  styleUrls: ['./faculty-view-marks.component.scss']
})
export class FacultyViewMarksComponent implements OnInit {
  marks: any;
  students: any;
  StudentForm!:FormGroup
  constructor(private facultyservice:FacultyService,private fb :FormBuilder) { }

  ngOnInit(): void {
    this.StudentForm=this.fb.group({
      hallticket:['',[Validators.required]]
    });

  }
  
  search(){
    this.facultyservice.ViewMarks(this.StudentForm.value.hallticket).subscribe((res:any)=>{
      this.marks=res
      console.log(res)
    });
  }
}
