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
import { OfficerViewStudentsComponent } from './officer/officer-view-students/officer-view-students.component';
import { OfficerViewFeeComponent } from './officer/officer-view-fee/officer-view-fee.component';
import { OfficerViewEmpComponent } from './officer/officer-view-emp/officer-view-emp.component';
import { OfficerProfileComponent } from './officer/officer-profile/officer-profile.component';

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
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  {
    path: 'officer-dashboard',
    component: OfficerDashboardComponent,
    children: [
      { path: '', redirectTo: 'officer-home', pathMatch: 'full' },
      { path: 'officer-home', component: OfficerHomeComponent },
      { path: 'officer-profile', component: OfficerProfileComponent },
      { path: 'officer-add-emp', component: OfficerAddEmployeeComponent },
      { path: 'officer-add-student', component: OfficerAddStudentComponent },
      { path: 'officer-add-fee', component: OfficerAddFeeComponent },
      { path: 'officer-view-emp', component: OfficerViewEmpComponent },
      { path: 'officer-view-std', component: OfficerViewStudentsComponent },
      { path: 'officer-view-fee', component: OfficerViewFeeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
