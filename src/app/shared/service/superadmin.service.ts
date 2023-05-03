import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {

  constructor(private http:HttpClient) { }

  getSuperadmin(username:any,password:any){
    return this.http.get('http://localhost:3000/superadmin/login?username=' + username +'&password=' +password)
  }
  getOfficer(){
    return this.http.get('http://localhost:3000/superadmin/officer')
  }
  getFaculty(department:any){
    return this.http.get('http://localhost:3000/superadmin/faculty?department=' + department)
  }
  getStudents(branch:any){
    return this.http.get('http://localhost:3000/superadmin/students?branch=' + branch)
  }
  searchStudentsfee(hallticket:any){
    return this.http.get('http://localhost:3000/admin/searchstudent?hallticket=' + hallticket)
  }
  viewFee(){
    return this.http.get('http://localhost:3000/superadmin/fee')
  }
}
