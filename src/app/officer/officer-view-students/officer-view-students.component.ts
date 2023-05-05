import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';
import { OfficerEditStudentComponent } from '../officer-edit-student/officer-edit-student.component';
import { OfficerDeleteStudentComponent } from '../officer-delete-student/officer-delete-student.component';

@Component({
  selector: 'app-officer-view-students',
  templateUrl: './officer-view-students.component.html',
  styleUrls: ['./officer-view-students.component.scss'],
})
export class OfficerViewStudentsComponent implements OnInit {
  allStudents: any;
  constructor(private officerApi: OfficerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.officerApi.viewStudents().subscribe((res: any) => {
      console.log(res, 'students');
      this.allStudents = res;
    });
  }

  Edit(s: any) {
    this.dialog.open(OfficerEditStudentComponent, {
      width: '90%',
      height: '98%',
      data: s,
    });
  }
  Delete(s: any) {
    this.dialog.open(OfficerDeleteStudentComponent, {
      width: '60%',
      height:'50%',
      data: s,
    });
  }
}
