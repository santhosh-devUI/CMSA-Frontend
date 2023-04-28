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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacultyAddMarksComponent } from './faculty/faculty-add-marks/faculty-add-marks.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { FacultyProfileComponent } from './faculty/faculty-profile/faculty-profile.component';
import { FacultyViewStudentsComponent } from './faculty/faculty-view-students/faculty-view-students.component';
import { FacultyViewMarksComponent } from './faculty/faculty-view-marks/faculty-view-marks.component';
import { FacultyAddTimetableComponent } from './faculty/faculty-add-timetable/faculty-add-timetable.component';
import { FacultyViewTimetableComponent } from './faculty/faculty-view-timetable/faculty-view-timetable.component';
import { LibrarianDashboardComponent } from './librarian/librarian-dashboard/librarian-dashboard.component';
import { LibrarianHeaderComponent } from './librarian/librarian-header/librarian-header.component';
import { LibrarianHomeComponent } from './librarian/librarian-home/librarian-home.component';
import { LibrarianSidenavComponent } from './librarian/librarian-sidenav/librarian-sidenav.component';
import { LibrarianNavbarComponent } from './librarian/librarian-navbar/librarian-navbar.component';
import { LibrarianAddbooksComponent } from './librarian/librarian-addbooks/librarian-addbooks.component';
import { LibrarianAddstudentbooksComponent } from './librarian/librarian-addstudentbooks/librarian-addstudentbooks.component';
import { LibrarianViewbooksComponent } from './librarian/librarian-viewbooks/librarian-viewbooks.component';
import { LibrarianStudentviewbooksComponent } from './librarian/librarian-studentviewbooks/librarian-studentviewbooks.component';
import { LibrarianEditstudentbooksComponent } from './librarian/librarian-editstudentbooks/librarian-editstudentbooks.component';
import { LibrarianEditbooksComponent } from './librarian/librarian-editbooks/librarian-editbooks.component';
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
import { StudentRecordsComponent } from './admin/students-list/student-records/student-records.component';
import { FacultyListComponent } from './admin/faculty-list/faculty-list.component';
import { FeeDetailsComponent } from './admin/fee-details/fee-details.component';
import { ViewTimetableComponent } from './student/view-timetable/view-timetable.component';
import { ViewMarksComponent } from './student/view-marks/view-marks.component';
import { ViewFeeComponent } from './student/view-fee/view-fee.component';
import { ViewBooksComponent } from './student/view-books/view-books.component';
import { ViewProfileComponent } from './student/view-profile/view-profile.component';
import { UpdateProfileComponent } from './student/update-profile/update-profile.component';
import { AddOfficerComponent } from './admin/officer/add-officer/add-officer.component';
import { EditOfficerComponent } from './admin/officer/edit-officer/edit-officer.component';
import { ViewOfficerComponent } from './admin/officer/view-officer/view-officer.component';
import { DeleteOfficerComponent } from './admin/officer/delete-officer/delete-officer.component';
import { LibrarianViewstudentsComponent } from './librarian/librarian-viewstudents/librarian-viewstudents.component';
import { LibrarianChangepasswordComponent } from './librarian/librarian-changepassword/librarian-changepassword.component';

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
    FacultyAddMarksComponent,
    FacultyDashboardComponent,
    FacultyProfileComponent,
    FacultyViewStudentsComponent,
    FacultyViewMarksComponent,
    FacultyAddTimetableComponent,
    FacultyViewTimetableComponent,
    StudentDashboardComponent,
    OfficerDashboardComponent,
    OfficerHomeComponent,
    OfficerAddEmployeeComponent,
    OfficerAddFeeComponent,
    OfficerAddStudentComponent,
    StudentRecordsComponent,
    FacultyListComponent,
    FeeDetailsComponent,
    ViewTimetableComponent,
    ViewMarksComponent,
    ViewFeeComponent,
    ViewBooksComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    LibrarianDashboardComponent,
    LibrarianHeaderComponent,
    LibrarianHomeComponent,
    LibrarianSidenavComponent,
    LibrarianNavbarComponent,
    LibrarianAddbooksComponent,
    LibrarianAddstudentbooksComponent,
    LibrarianViewbooksComponent,
    LibrarianStudentviewbooksComponent,
    LibrarianEditstudentbooksComponent,
    LibrarianEditbooksComponent,
    LibrarianViewstudentsComponent,
    LibrarianChangepasswordComponent,
    OfficerAddEmployeeComponent,
    OfficerHomeComponent,
    OfficerAddFeeComponent ,
 OfficerAddStudentComponent ,
 StudentRecordsComponent ,
 FacultyListComponent ,
 FeeDetailsComponent,
   ViewTimetableComponent, 
   ViewMarksComponent,
  ViewFeeComponent,
    ViewBooksComponent,
 ViewProfileComponent ,
   UpdateProfileComponent, 
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
