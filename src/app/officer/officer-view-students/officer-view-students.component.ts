import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-view-students',
  templateUrl: './officer-view-students.component.html',
  styleUrls: ['./officer-view-students.component.scss'],
})
export class OfficerViewStudentsComponent implements OnInit {
  allStudents: any;
  constructor(private officerApi: OfficerService) {}

  ngOnInit(): void {
    this.officerApi.viewStudents().subscribe((res: any) => {
      console.log(res, 'students');
      this.allStudents = res;
    });
  }
}
