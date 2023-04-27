import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LibrarianEditstudentbooksComponent } from '../librarian-editstudentbooks/librarian-editstudentbooks.component';

@Component({
  selector: 'app-librarian-studentviewbooks',
  templateUrl: './librarian-studentviewbooks.component.html',
  styleUrls: ['./librarian-studentviewbooks.component.scss']
})
export class LibrarianStudentviewbooksComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  editstudentbooks(){
    this.dialog.open(LibrarianEditstudentbooksComponent,{
      width:'60%',
      height:'80%'
    })
  }
}
