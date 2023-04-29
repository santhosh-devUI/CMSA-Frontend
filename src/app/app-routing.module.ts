import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './welcome-page/home/home.component';
import { LoginsPageComponent } from './welcome-page/logins-page/logins-page.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { OfficerLoginComponent } from './officer/officer-login/officer-login.component';
import { FacultyLoginComponent } from './faculty/faculty-login/faculty-login.component';
import { LibrarianLoginComponent } from './librarian/librarian-login/librarian-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentRegistrationComponent } from './student/student-registration/student-registration.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { OfficerDashboardComponent } from './officer/officer-dashboard/officer-dashboard.component';
import { OfficerHomeComponent } from './officer/officer-home/officer-home.component';
import { OfficerAddEmployeeComponent } from './officer/officer-add-employee/officer-add-employee.component';
import { OfficerAddFeeComponent } from './officer/officer-add-fee/officer-add-fee.component';
import { OfficerAddStudentComponent } from './officer/officer-add-student/officer-add-student.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { ViewProfileComponent } from './student/view-profile/view-profile.component';
import { ViewMarksComponent } from './student/view-marks/view-marks.component';
import { ViewFeeComponent } from './student/view-fee/view-fee.component';
import { ViewBooksComponent } from './student/view-books/view-books.component';
import { UpdateProfileComponent } from './student/update-profile/update-profile.component';
import { ViewTimetableComponent } from './student/view-timetable/view-timetable.component';
import { FacultyListComponent } from './admin/faculty-list/faculty-list.component';
import { FeeDetailsComponent } from './admin/fee-details/fee-details.component';
import { StudentRecordsComponent } from './admin/students-list/student-records/student-records.component';
import { AddOfficerComponent } from './admin/officer/add-officer/add-officer.component';
import { ViewOfficerComponent } from './admin/officer/view-officer/view-officer.component';
import { EditOfficerComponent } from './admin/officer/edit-officer/edit-officer.component';
import { DeleteOfficerComponent } from './admin/officer/delete-officer/delete-officer.component';
import { LibraryComponent } from './admin/library/library.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'logins-page', component: LoginsPageComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'officer-login', component: OfficerLoginComponent },
  { path: 'faculty-login', component: FacultyLoginComponent },
  { path: 'library-login', component: LibrarianLoginComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-reg', component: StudentRegistrationComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent, children:[
    {path:'home',component:AdminDashboardComponent},
    {path:'add-officer',component:AddOfficerComponent},
    {path:'view-officer',component:ViewOfficerComponent},
    {path:'Update-officer',component:EditOfficerComponent},
    {path:'delete-officer',component:DeleteOfficerComponent},
    {path:'Faculty',component:FacultyListComponent},
    {path:'Fee',component:FeeDetailsComponent},
    {path:'Students-Records',component:StudentRecordsComponent},
    {path:'Library',component:LibraryComponent}
  ]},

  {
    path: 'officer-dashboard',
    component: OfficerDashboardComponent,
    children: [
      { path: '', redirectTo: 'officer-home', pathMatch: 'full' },
      { path: 'officer-home', component: OfficerHomeComponent },
      { path: 'officer-add-emp', component: OfficerAddEmployeeComponent },
      { path: 'officer-add-student', component: OfficerAddStudentComponent },
      { path: 'officer-add-fee', component: OfficerAddFeeComponent },
    ],
  },
  { path:'student-dashboard',component:StudentDashboardComponent, children:[
    { path:'view-profile',component:ViewProfileComponent},
    { path:'view-marks',component:ViewMarksComponent},
    { path:'view-fee',component:ViewFeeComponent},
    { path:'view-books',component:ViewBooksComponent},
    { path:'update-profile',component:UpdateProfileComponent},
    { path:'view-timetable',component:ViewTimetableComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
