import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//CALENDARIO
import { CalendarModule } from 'primeng/calendar';
//CUADRO DE DIALOGO
import { DynamicDialogModule, DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
//import { ComponenteCuadroDialogoComponent } from '../../componentes/componentesPrimeNg/componente-cuadro-dialogo/componente-cuadro-dialogo.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    DynamicDialogModule
    //ComponenteCuadroDialogoComponent
  ],
  exports: [
    FormsModule,
    CalendarModule,
    DynamicDialogModule,
    //ComponenteCuadroDialogoComponent
  ],
  providers: [
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig
  ]
})
export class ComponentesPrimengModule {}
export { DialogService, DynamicDialogRef, DynamicDialogModule, DynamicDialogConfig };

