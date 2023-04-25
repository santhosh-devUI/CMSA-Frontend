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
}
