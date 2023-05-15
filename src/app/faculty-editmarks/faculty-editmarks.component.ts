import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from '../shared/service/faculty.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-faculty-editmarks',
  templateUrl: './faculty-editmarks.component.html',
  styleUrls: ['./faculty-editmarks.component.scss']
})
export class FacultyEditmarksComponent implements OnInit {

  Viewmarks!:FormGroup
  mmid: any;
    constructor(private facultyservice:FacultyService,private fb :FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
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
    this.Viewmarks.patchValue({
      hallticket:this.data.hallticket,
      studentname:this.data.studentname,
      branch:this.data.branch,
      sem:this.data.sem,
      subject1:this.data.subject1,
      subject1totalmarks:this.data.subject1totalmarks,
      subject1marks:this.data.subject1marks,
      subject2:this.data.subject2,
      subject2totalmarks:this.data.subject2totalmarks,
      subject2marks:this.data.subject2marks,
      subject3:this.data.subject3,
      subject3totalmarks:this.data.subject3totalmarks,
      subject3marks:this.data.subject3marks,
      totalMarks:this.data.totalMarks,
      totalscoredmarks:this.data.totalscoredmarks,
      percentage:this.data.percentage,
      status:this.data.status,
  })
}
Updatemarks(){
  let id=this.data._id
  const e= {
    hallticket:this.Viewmarks.get('hallticket')?.value,
    studentname:this.Viewmarks.get('studentname')?.value,
    branch:this.Viewmarks.get('branch')?.value,
    sem:this.Viewmarks.get('sem')?.value,
    subject1:this.Viewmarks.get('subject1')?.value,
    subject1totalmarks:this.Viewmarks.get('subject1totalmarks')?.value,
    subject1marks:this.Viewmarks.get('subject1marks')?.value,
    subject2:this.Viewmarks.get('subject2')?.value,
    subject2totalmarks:this.Viewmarks.get('')?.value,
    subject2marks:this.Viewmarks.get('subject2totalmarks')?.value.subject2marks,
    subject3:this.Viewmarks.get('subject3')?.value,
    subject3totalmarks:this.Viewmarks.get('subject3totalmarks')?.value,
    subject3marks:this.Viewmarks.get('subject3marks')?.value,
    totalMarks:this.Viewmarks.get('totalMarks')?.value,
    totalscoredmarks:this.Viewmarks.get('totalscoredmarks')?.value,
    percentage:this.Viewmarks.get('percentage')?.value,
    status:this.Viewmarks.get('status')?.value,
  }

  this.facultyservice.EditMarks(id,e).subscribe((res:any)=>{
    alert('updated succesfully')
    window.location.reload()
    console.log(res);
    
  })
}
}

