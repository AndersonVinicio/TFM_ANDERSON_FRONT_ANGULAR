import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig, ButtonModule,FormsModule} from '../../../modulos/componentes-primeng-module/componentes-primeng.module';
import { Citas } from '../../../interfaces/citas';
// LIBRERIA PARA MANEJAR LAS FECHAS TEMPO
import { format } from '@formkit/tempo';
import { ApiCitasService } from '../../../services/api-citas.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Console } from 'console';


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
export class ComponenteCuadroDialogoComponent implements OnInit, OnDestroy{
  respuestaApi: any []=[];
  observableAddCita!: Subscription;
  datosCita: Citas = {
    id:0,
    hora:'',
    fecha: new Date,
    nombre_cliente:'',
    trabajo:'',
    telefono:''
  };
  fecha!: Date;
  constructor(public ref: DynamicDialogRef, 
  public config: DynamicDialogConfig, 
  private apiService: ApiCitasService,
  private ruta: Router)
  {
    let datos = this.config.data
    this.datosCita.id = datos.datosCita.id
    this.datosCita.hora = datos.datosCita.hora;
    // LA VARIABLE FECHA DE LA INTERFACE ES DE TIPO DATE Y STRING;
    // EL METODO FORMAT DEVUELVE UN STRING.
    this.datosCita.fecha = format(datos.datosCita.fecha,'YYYY-MM-DD')
    this.datosCita.nombre_cliente = datos.datosCita.nombre_cliente;
    this.datosCita.telefono = datos.datosCita.telefono;
    this.datosCita.trabajo = datos.datosCita.trabajo;
  }
  ngOnInit(): void{
    console.log(this.datosCita)
  }


 async delete_cita(){
    if(this.datosCita.nombre_cliente!== '' && this.datosCita.trabajo!==''){
      let respuestaApiDelete
      console.log(this.datosCita);
      await this.apiService.deleteCita(this.datosCita.id).then(respuesta=>{
        respuestaApiDelete = respuesta;
      });
      console.log(respuestaApiDelete);
      this.ref.close(respuestaApiDelete);
    }else{
      alert('NO SE PUEDE ELIMINAR ESTA CITA POR QUE LA HORA ESTA LIBRE');
    }
  }

  OnSubmitAddCita(dataForm:Citas){
    this.observableAddCita = this.apiService.addCita(dataForm).subscribe({
      next: (data)=>{
        this.respuestaApi = this.respuestaApi.concat(data);
      },
      complete: ()=>{
        this.ref.close(this.respuestaApi);
      }
    });
    
    
  }
  ngOnDestroy(){
    try {
      if(this.observableAddCita){
        this.observableAddCita.unsubscribe();
      }
      
    } catch (error) {
      console.log('NO SE HA REALIZADO EL UNSUBCRIBE POR QUE NO HAY UN SUBCRIPCION');
      console.log('ERROR QUE ARROJA: '+error);
    }
    
    
  }

}
