import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';

const materialcomponents=[
  MatButtonModule,
  MatSelectModule,
  MatMenuModule
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
