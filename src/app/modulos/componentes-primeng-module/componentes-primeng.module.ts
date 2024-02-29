import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//CALENDARIO
import { CalendarModule } from 'primeng/calendar';
//CUADRO DE DIALOGO
import { DynamicDialogModule, DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
//BOTONES
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    DynamicDialogModule,
    ButtonModule
    //ComponenteCuadroDialogoComponent
  ],
  exports: [
    FormsModule,
    CalendarModule,
    DynamicDialogModule,
    ButtonModule
    //ComponenteCuadroDialogoComponent
  ],
  providers: [
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig
  ]
})
export class ComponentesPrimengModule {}
export { DialogService, DynamicDialogRef, DynamicDialogModule, DynamicDialogConfig, ButtonModule, CalendarModule, FormsModule };

