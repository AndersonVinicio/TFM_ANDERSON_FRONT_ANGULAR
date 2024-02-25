import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from '../../../modulos/componentes-primeng-module/componentes-primeng.module';
import { Citas } from '../../../interfaces/citas';
// LIBRERIA PARA MANEJAR LAS FECHAS TEMPO
import { format } from '@formkit/tempo';


@Component({
  selector: 'app-componente-cuadro-dialogo',
  standalone: true,
  imports: [],
  providers:[],
  templateUrl: './componente-cuadro-dialogo.component.html',
  styleUrl: './componente-cuadro-dialogo.component.css'
})
export class ComponenteCuadroDialogoComponent {
  datosCita: Citas = {
    hora:'',
    fecha: new Date,
    nombre:'',
    trabajo:''
  };
  fecha!: Date;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig)
  {
    let datos = this.config.data
    
    console.log(datos);
    this.datosCita.hora = datos.datosCita.hora;
    // LA VARIABLE FECHA DE LA INTERFACE ES DE TIPO DATE Y STRING;
    // EL METODO FORMAT DEVUELVE UN STRING.
    this.datosCita.fecha = format(datos.datosCita.fecha,'YYYY-MM-DD')
    this.datosCita.nombre = datos.datosCita.nombre;
    this.datosCita.trabajo = datos.datosCita.trabajo;
  }
  ngOnInit(): void{}

}
