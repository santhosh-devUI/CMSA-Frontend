import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {
super=['heelo', "nolll"]
  constructor(
    private http:HttpClient
  ) { }

  officerLogin(e:any,m:any,t:any){
    return this.http.get(`http://localhost:3000/officer/login?empid=${e}&mobileno=${m}&typeofemployee=${t}`)
  }
}
