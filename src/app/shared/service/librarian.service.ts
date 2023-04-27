import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {

  constructor(private http:HttpClient) { }

PostBooks(data:any){
  return this.http.post<any>(`http://localhost:3000/librarian/addbook`,data)
}
GetBooks(){
  return this.http.get<any>(`http://localhost:3000/librarian/books`)
}
PostStudentBooks(data:any){
  return this.http.post<any>(`http://localhost:3000/librarian/addstudentbooks`,data)
}
GetStudentBooks(){
  return this.http.get<any>(`http://localhost:3000/librarian/viewstudentbooks`)
}
}
