import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LibrarianEditbooksComponent } from '../librarian-editbooks/librarian-editbooks.component';

@Component({
  selector: 'app-librarian-viewbooks',
  templateUrl: './librarian-viewbooks.component.html',
  styleUrls: ['./librarian-viewbooks.component.scss']
})
export class LibrarianViewbooksComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
editbooks(){
  this.dialog.open(LibrarianEditbooksComponent,{
    width:'50%'
  })
}
}
