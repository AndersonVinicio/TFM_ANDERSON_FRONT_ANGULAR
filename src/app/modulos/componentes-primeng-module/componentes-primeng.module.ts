import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//CALENDARIO
import { CalendarModule } from 'primeng/calendar';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
  ],
  exports: [
    FormsModule,
    CalendarModule,
  ]
})
export class ComponentesPrimengModule { }
