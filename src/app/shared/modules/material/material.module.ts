import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


const materialcomponents=[
  MatButtonModule,
  MatSelectModule,
  MatMenuModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatTableModule,
  MatCardModule,
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialcomponents
  ],
  exports:[
    materialcomponents
  ]
})
export class MaterialModule { }
