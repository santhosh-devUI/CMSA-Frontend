import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  studentLogin(hallticket:any,mobileno:any){
    return this.http.get('http://localhost:3000/student/login?hallticket='+hallticket+'&mobileno='+mobileno)
  }
  studentProfile(hallticket:any){
    return this.http.get('http://localhost:3000/student/profile?hallticket='+hallticket)
  }
}
