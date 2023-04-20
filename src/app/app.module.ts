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


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    FacultyLoginComponent,
    LibrarianLoginComponent,
    OfficerLoginComponent,
    PlacementLoginComponent,
    StudentLoginComponent,
    SuperadminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
