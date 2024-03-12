import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig, ButtonModule,FormsModule} from '../../../modulos/componentes-primeng-module/componentes-primeng.module';
import { Citas } from '../../../interfaces/citas';
// LIBRERIA PARA MANEJAR LAS FECHAS TEMPO
import { format } from '@formkit/tempo';
import { ApiCitasService } from '../../../services/api-citas.service';


@Component({
  selector: 'app-componente-cuadro-dialogo',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule
  ],
  providers:[],
  templateUrl: './componente-cuadro-dialogo.component.html',
  styleUrl: './componente-cuadro-dialogo.component.css'
})
export class ComponenteCuadroDialogoComponent {
  datosCita: Citas = {
    id:0,
    hora:'',
    fecha: new Date,
    nombre_cliente:'',
    trabajo:'',
    telefono:''
  };
  //date_calendario:Date = new Date();
  fecha!: Date;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private apiService: ApiCitasService)
  {
    let datos = this.config.data
    
    // console.log(datos);
    this.datosCita.id = datos.datosCita.id
    this.datosCita.hora = datos.datosCita.hora;
    // LA VARIABLE FECHA DE LA INTERFACE ES DE TIPO DATE Y STRING;
    // EL METODO FORMAT DEVUELVE UN STRING.
    this.datosCita.fecha = format(datos.datosCita.fecha,'YYYY-MM-DD')
    //this.date_calendario = datos.datosCita.fecha
    this.datosCita.nombre_cliente = datos.datosCita.nombre_cliente;
    this.datosCita.telefono = datos.datosCita.telefono;
    this.datosCita.trabajo = datos.datosCita.trabajo;
  }
  ngOnInit(): void{
    console.log(this.datosCita)
  }

  delete_cita(){
    if(this.datosCita.nombre_cliente!== '' && this.datosCita.trabajo!==''){
      this.ref.close(this.datosCita);
    }else{
      alert('NO SE PUEDE ELIMINAR ESTA CITA POR QUE LA HORA ESTA LIBRE');
    }
  }

  OnSubmitAddCita(data:Citas){
    console.log(data)
    this.apiService.addCita(data).subscribe();
    this.ref.close(this.datosCita);
  }

}
