import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAdmin(username:any,password:any){
    return this.http.get('http://localhost:3000/admin/login?username='+ username+'&password='+password)
  }
  addOfficer(data:any){
    return this.http.post('http://localhost:3000/admin/regofficer',data)
  }
  getOfficer(){
    return this.http.get('http://localhost:3000/admin/viewofficer')
  }
  editOfficer(id:any,data:any){
    return this.http.put('http://localhost:3000/admin/updateofficer/'+id,data)
  }
  deleteOfficer(id:any){
    return this.http.delete('http://localhost:3000/admin/delofficer/'+id)
  }
  getStudents(branch:any){
    return this.http.get('http://localhost:3000/admin/viewstudents?branch=' + branch)
  }
  SearchStudents(hallticket:any){
    return this.http.get('http://localhost:3000/admin/searchstudent?hallticket=' + hallticket)
  }
  ShowFaculty(department:any){
    return this.http.get('http://localhost:3000/admin/showFaculty?department=' + department)
  }
  ShowFee(){
    return this.http.get('http://localhost:3000/admin/viewstudents')
  }
  Branchwisefee(branch:any){
    return this.http.get('http://localhost:3000/admin/studentfees?branch=' + branch)
  }
  Studentfee(hallticket:any){
    return this.http.get('http://localhost:3000/admin/searchstudentfee?hallticket=' + hallticket)
  }
  SearchStudentsFee(hallticket:any){
    return this.http.get('http://localhost:3000/admin/searchstudentfee?hallticket=' + hallticket)
  }
}

