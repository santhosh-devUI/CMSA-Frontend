import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  student:any
  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    let stuhallticket = JSON.parse(localStorage.getItem('student')!).hallticket
     this.studentservice.studentProfile(stuhallticket).subscribe((res:any)=>{
      this.student = res
      console.log(this.student);
      
     })
    
  }

}
