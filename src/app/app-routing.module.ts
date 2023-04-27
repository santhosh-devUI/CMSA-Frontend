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
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { FacultyProfileComponent } from './faculty/faculty-profile/faculty-profile.component';
import { FacultyAddTimetableComponent } from './faculty/faculty-add-timetable/faculty-add-timetable.component';
import { FacultyViewTimetableComponent } from './faculty/faculty-view-timetable/faculty-view-timetable.component';
import { FacultyAddMarksComponent } from './faculty/faculty-add-marks/faculty-add-marks.component';
import { FacultyViewMarksComponent } from './faculty/faculty-view-marks/faculty-view-marks.component';
import { FacultyViewStudentsComponent } from './faculty/faculty-view-students/faculty-view-students.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
