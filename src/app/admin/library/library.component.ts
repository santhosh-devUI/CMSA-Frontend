import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  Libraryfaculty: any;
  TotalBooks:any;
  StdBooks:any;

  constructor(private Api:AdminService) { }

  ngOnInit(): void {
    this.Api.ShowFaculty("Librarian").subscribe((res:any)=>{
      this.Libraryfaculty = res;
    })
    this.Api.TotalBooks().subscribe((res:any)=>{
      this.TotalBooks = res;
    })
    this.Api.StdBooks().subscribe((res:any)=>{
      this.StdBooks = res;
      console.log(res,"res");
      
    })
  }

}
