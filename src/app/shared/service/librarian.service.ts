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
EditBooks(id:any , data:any){
  return this.http.put<any>(`http://localhost:3000/librarian/book/`+id , data)
}
DeleteBooks(id:any){
  return this.http.delete<any>(`http://localhost:3000/librarian/book/`+id)
}
EditStudentBooks(id:any,data:any){
  return this.http.put<any>(`http://localhost:3000/librarian/editstubooks/`+id , data)
}
DeleteStudentBooks(){
  return this.http.delete<any>(`http://localhost:3000/librarian/editstubooks/`)
}
}
