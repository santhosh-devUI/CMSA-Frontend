import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-add-marks',
  templateUrl: './faculty-add-marks.component.html',
  styleUrls: ['./faculty-add-marks.component.scss']
})
export class FacultyAddMarksComponent implements OnInit {

  constructor(private fb:FormBuilder,private facultyservice:FacultyService) { }
AddMarksForm !: FormGroup
  ngOnInit(): void {
    this.AddMarksForm=this.fb.group({
      hallticket:['',[Validators.required]],
       studentname:['',[Validators.required]],
       branch:['',[Validators.required]],
       sem:['',[Validators.required]],
       subject1:['',[Validators.required]],
       subject1totalmarks:['',[Validators.required]],
       subject1marks:['',[Validators.required]],
       subject2:['',[Validators.required]],
       subject2totalmarks:['',[Validators.required]],
       subject2marks:['',[Validators.required]],
       subject3:['',[Validators.required]],
       subject3totalmarks:['',[Validators.required]],
       subject3marks:['',[Validators.required]],
       totalMarks:['',[Validators.required]],
       totalscoredmarks:['',[Validators.required]],
       percentage:['',[Validators.required]],
       status:['',[Validators.required]],
    })
  }
  AddMarks(){
  console.log(this.AddMarksForm.value)
    if(this.AddMarksForm.valid){
      this.facultyservice.AddMarks(this.AddMarksForm.value).subscribe((res:any)=>{
        alert('added succesful')
        console.log(res)
      })
    }
  }else(){
    alert('something went wrong')

  }

}
