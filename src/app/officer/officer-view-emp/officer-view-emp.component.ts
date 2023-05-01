import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-view-emp',
  templateUrl: './officer-view-emp.component.html',
  styleUrls: ['./officer-view-emp.component.scss'],
})
export class OfficerViewEmpComponent implements OnInit {
  faculty: any;
  librarian: any;
  constructor(private officerApi: OfficerService) {}

  ngOnInit(): void {
    this.officerApi.viewEmployees('faculty').subscribe((res: any) => {
      this.faculty = res;
      console.log(res, 'f');
    });
    this.officerApi.viewEmployees('librarian').subscribe((res: any) => {
      this.librarian = res;
    });
  }
}
