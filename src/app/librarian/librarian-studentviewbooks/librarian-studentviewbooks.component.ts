import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LibrarianEditstudentbooksComponent } from '../librarian-editstudentbooks/librarian-editstudentbooks.component';
import { LibrarianService } from 'src/app/shared/service/librarian.service';

@Component({
  selector: 'app-librarian-studentviewbooks',
  templateUrl: './librarian-studentviewbooks.component.html',
  styleUrls: ['./librarian-studentviewbooks.component.scss']
})
export class LibrarianStudentviewbooksComponent implements OnInit {
  
  studentBooks: any;
  
  constructor(private dialog:MatDialog , private librarianService:LibrarianService) { }

  ngOnInit(): void {
    this.getStudentBooks();
  }

  getStudentBooks(){
    this.librarianService.GetStudentBooks().subscribe((res)=>{
      this.studentBooks = res;
    })
  }

  editstudentbooks(){
    this.dialog.open(LibrarianEditstudentbooksComponent,{
      width:'60%',
      height:'80%'
    })
  }
}
