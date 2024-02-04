import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule
  ],
  exports: [
    CalendarModule,
    FormsModule
  ]
})
export class ComponentesPrimengModule { }
