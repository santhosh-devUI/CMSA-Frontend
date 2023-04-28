import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/shared/service/faculty.service';

@Component({
  selector: 'app-faculty-view-marks',
  templateUrl: './faculty-view-marks.component.html',
  styleUrls: ['./faculty-view-marks.component.scss']
})
export class FacultyViewMarksComponent implements OnInit {
  marks: any=[];
  students: any;
  StudentForm!:FormGroup
  Viewmarks!:FormGroup
  mmid: any;
    constructor(private facultyservice:FacultyService,private fb :FormBuilder) { }

  ngOnInit(): void {
    this.facultyservice.ViewMarks().subscribe((res:any)=>{
      this.marks=res
      console.log(res)
    });
    this.StudentForm=this.fb.group({
      hallticket:['',[Validators.required]]
    });
    this.Viewmarks=this.fb.group({
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
    });

  }
  
  search(){
    if(this.StudentForm.valid){
    this.facultyservice.ViewStudentMarks(this.StudentForm.value.hallticket).subscribe((res:any)=>{
      this.marks=[res]
    })
  }else{
    alert('please enter hallticket number')
  }
  }
  Delete(m:any){
    this.facultyservice.DeleteMarks(m).subscribe((res:any)=>{
      alert('deleted')
      window.location.reload()

    })
  }
Edit(mm:any){
  this.mmid==mm._id
  this.Viewmarks.patchValue({
    hallticket:mm.hallticket,
    studentname:mm.studentname,
    branch:mm.branch,
    sem:mm.sem,
    subject1:mm.subject1,
    subject1totalmarks:mm.subject1totalmarks,
    subject1marks:mm.subject1marks,
    subject2:mm.subject2,
    subject2totalmarks:mm.subject2totalmarks,
    subject2marks:mm.subject2marks,
    subject3:mm.subject3,
    subject3totalmarks:mm.subject3totalmarks,
    subject3marks:mm.subject3marks,
    totalMarks:mm.totalMarks,
    totalscoredmarks:mm.totalscoredmarks,
    percentage:mm.percentage,
    status:mm.status,
  })
}
Updatemarks(){
  this.facultyservice.EditMarks(this.mmid,this.Viewmarks.value).subscribe((res:any)=>{
    alert('updated succesfully')
    window.location.reload()
    console.log(res);
    
  })
}
}
