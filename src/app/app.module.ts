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

import { StudentRegistrationComponent } from './student/student-registration/student-registration.component';
import { HomeComponent } from './welcome-page/home/home.component';
import { LoginsPageComponent } from './welcome-page/logins-page/logins-page.component';

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
    LoginsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
