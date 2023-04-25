import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.scss']
})
export class FacultyLoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  LoginForm !:FormGroup
  ngOnInit(): void {
  this.LoginForm=this.fb.group({
    
  })
  }

}
