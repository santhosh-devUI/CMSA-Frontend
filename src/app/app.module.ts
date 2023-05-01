import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { FacultyLoginComponent } from './faculty/faculty-login/faculty-login.component';
import { LibrarianLoginComponent } from './librarian/librarian-login/librarian-login.component';
import { OfficerLoginComponent } from './officer/officer-login/officer-login.component';
import { PlacementLoginComponent } from './placement-cell/placement-login/placement-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { SuperadminLoginComponent } from './superadmin/superadmin-login/superadmin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddOfficerComponent } from './admin/officer/add-officer/add-officer.component';
import { EditOfficerComponent } from './admin/officer/edit-officer/edit-officer.component';
import { DeleteOfficerComponent } from './admin/officer/delete-officer/delete-officer.component';
import { ViewOfficerComponent } from './admin/officer/view-officer/view-officer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StudentRegistrationComponent } from './student/student-registration/student-registration.component';
import { HomeComponent } from './welcome-page/home/home.component';
import { LoginsPageComponent } from './welcome-page/logins-page/logins-page.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { OfficerDashboardComponent } from './officer/officer-dashboard/officer-dashboard.component';
import { OfficerHomeComponent } from './officer/officer-home/officer-home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { OfficerAddEmployeeComponent } from './officer/officer-add-employee/officer-add-employee.component';
import { OfficerAddFeeComponent } from './officer/officer-add-fee/officer-add-fee.component';
import { OfficerAddStudentComponent } from './officer/officer-add-student/officer-add-student.component';
import { OfficerViewStudentsComponent } from './officer/officer-view-students/officer-view-students.component';
import { OfficerStudentFeeStatusComponent } from './officer/officer-student-fee-status/officer-student-fee-status.component';
import { OfficerViewFeeComponent } from './officer/officer-view-fee/officer-view-fee.component';
import { OfficerViewEmpComponent } from './officer/officer-view-emp/officer-view-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    FacultyLoginComponent,
    LibrarianLoginComponent,
    OfficerLoginComponent,
    PlacementLoginComponent,
    StudentLoginComponent,
    SuperadminLoginComponent,
    AdminDashboardComponent,
    AddOfficerComponent,
    EditOfficerComponent,
    DeleteOfficerComponent,
    ViewOfficerComponent,
    StudentRegistrationComponent,
    HomeComponent,
    LoginsPageComponent,
    StudentDashboardComponent,
    OfficerDashboardComponent,
    OfficerHomeComponent,
    OfficerAddEmployeeComponent,
    OfficerAddFeeComponent,
    OfficerAddStudentComponent,
    OfficerViewStudentsComponent,
    OfficerStudentFeeStatusComponent,
    OfficerViewFeeComponent,
    OfficerViewEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
