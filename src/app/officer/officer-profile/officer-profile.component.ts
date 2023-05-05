import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-profile',
  templateUrl: './officer-profile.component.html',
  styleUrls: ['./officer-profile.component.scss'],
})
export class OfficerProfileComponent implements OnInit {
  officer: any;
  constructor(private officerApi: OfficerService) {}

  ngOnInit(): void {
    let eid = JSON.parse(localStorage.getItem('officer')!).empid;
    console.log(eid);
    this.officerApi.getProfile(eid).subscribe((res: any) => {
      console.log(res, 'profile');
    });
  }
}
