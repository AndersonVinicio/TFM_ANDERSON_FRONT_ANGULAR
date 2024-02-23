import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from '../../../modulos/componentes-primeng-module/componentes-primeng.module';
import { Citas } from '../../../interfaces/citas';


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
    nombre:'',
    trabajo:''
  };
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig)
  {
    let datos = this.config.data
    // console.log(datos.datosCita.trabajo);
    this.datosCita.hora = datos.datosCita.hora;
    this.datosCita.nombre = datos.datosCita.nombre;
    this.datosCita.trabajo = datos.datosCita.trabajo;
  }
  ngOnInit(): void{
    console.log(this.datosCita);
  }

}
