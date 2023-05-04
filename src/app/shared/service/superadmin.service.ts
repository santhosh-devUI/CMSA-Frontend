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
  getStudents(branch:any){
    return this.http.get('http://localhost:3000/superadmin/students?branch=' + branch)
  }
  Searchtotalstudfee(hallticket:any){
    return this.http.get('http://localhost:3000/superadmin/searchstufee?hallticket=' + hallticket)
  }
  getFaculty(department:any){
    return this.http.get('http://localhost:3000/superadmin/faculty?department=' + department)
  }
  viewFee(){
    return this.http.get('http://localhost:3000/superadmin/fee')
  }
  StudentTotalfee(branch:any){
    return this.http.get('http://localhost:3000/superadmin/studentfee?branch=' + branch)
  }
  searchStudentsfee(hallticket:any){
    return this.http.get('http://localhost:3000/admin/searchstudent?hallticket=' + hallticket)
  }
  updateStdFee(id:any,data:any){
    return this.http.put('http://localhost:3000/superadmin/updatestfee/'+ id,data)
  }
  viewBooks(){
    return this.http.get('http://localhost:3000/superadmin/totalbooks')
  }
  viewStdBooks(){
    return this.http.get('http://localhost:3000/superadmin/showstubooks')
  }
}
