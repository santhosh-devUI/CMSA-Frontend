import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OfficerService {
  super = ['heelo', 'nolll'];
  constructor(private http: HttpClient) {}

  officerLogin(e: any, m: any, t: any) {
    return this.http.get(
      `http://localhost:3000/officer/login?empid=${e}&mobileno=${m}&typeofemployee=${t}`
    );
  }
  addEmployees(data: any) {
    return this.http.post('http://localhost:3000/officer/addemp', data);
  }

  viewEmployees(t:any) {
    return this.http.get('http://localhost:3000/officer/emps?typeofemployee='+t);
  }

  addStudents(data: any) {
    return this.http.post('http://localhost:3000/officer/studentreg', data);
  }

  viewStudents() {
    return this.http.get('http://localhost:3000/officer/allstudents');
  }

  addFees(data: any) {
    return this.http.post('http://localhost:3000/officer/addfee', data);
  }

  viewFees() {
    return this.http.get('http://localhost:3000/officer/viewfee');
  }
  updateFee(_id: any, data: any) {
    return this.http.put<any>(
      'http://localhost:3000/officer/updatefee/' + _id,
      data
    );
  }
}
