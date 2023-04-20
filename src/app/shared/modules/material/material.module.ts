import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

const materialcomponents=[
  MatButtonModule
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
