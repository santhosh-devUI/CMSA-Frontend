import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-add-fee',
  templateUrl: './officer-add-fee.component.html',
  styleUrls: ['./officer-add-fee.component.scss'],
})
export class OfficerAddFeeComponent implements OnInit {
  feeForm!: FormGroup;
  Oid: any;
  fees: any;
  addBtn: boolean = true;
  updateBtn: boolean = false;
  constructor(
    private fb: FormBuilder,
    private officerApi: OfficerService,
    private Routes: Router
  ) {}

  ngOnInit(): void {
    this.Oid = JSON.parse(localStorage.getItem('officer')!);

    this.feeForm = this.fb.group({
      admissionfee: ['', [Validators.required]],
      collegefee: ['', [Validators.required]],
      libraryfee: ['', [Validators.required]],
      jntufee: ['', [Validators.required]],
      busfee: ['', [Validators.required]],
      hostelfee: ['', [Validators.required]],
    });

    this.officerApi.viewFees().subscribe((res: any) => {
      res.filter((f: any) => {
        this.fees = f;
      });
    });
  }

  addFee() {
    let d = {
      empid: this.Oid.empid,
      ...this.feeForm.value,
    };
    this.officerApi.addFees(d).subscribe((res: any) => {});
    this.feeForm.reset();
    window.location.reload();
  }
  editFee() {
    this.feeForm.patchValue({
      admissionfee: this.fees.admissionfee,
      collegefee: this.fees.collegefee,
      libraryfee: this.fees.libraryfee,
      jntufee: this.fees.jntufee,
      busfee: this.fees.busfee,
      hostelfee: this.fees.hostelfee,
    });

    this.updateBtn = true;
    this.addBtn = false;
  }
  updateFee() {
    this.officerApi
      .updateFee(this.fees._id, this.feeForm.value)
      .subscribe((res: any) => {
        console.log(res, 'updated');
      });
  }
}
