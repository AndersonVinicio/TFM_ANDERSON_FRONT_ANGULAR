import { Component, OnInit } from '@angular/core';
import { ComponentesPrimengModule, DialogService, DynamicDialogRef} from '../../modulos/componentes-primeng-module/componentes-primeng.module';
import { Observable, Subscription, interval } from 'rxjs';
import { Citas } from '../../interfaces/citas';
import { ComponenteCuadroDialogoComponent } from '../../componentes/componentesPrimeNg/componente-cuadro-dialogo/componente-cuadro-dialogo.component';
import { format } from '@formkit/tempo';
import { ApiCitasService } from '../../services/api-citas.service';
import { CommonModule } from '@angular/common';






@Component({
  selector: 'app-view-citas',
  standalone: true,
  // imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
  imports: [
    ComponentesPrimengModule,
    ComponenteCuadroDialogoComponent,
    CommonModule 
  ],
  providers:[
    DialogService,
    DynamicDialogRef
  ],
  templateUrl: './view-citas.component.html',
  styleUrl: './view-citas.component.css'
})

export class ViewCitasComponent implements OnInit{
  private updateData: Subscription = new Subscription;
  datosCitaApi: Citas[] = [];
  public citas$!: Observable<Citas>;
  dateCalendario:Date = new Date();
  dateFormat:string | undefined;
  datosCitas: Citas [] = [];

  //variable para el cuadro de dialogo
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService, private service:ApiCitasService){}
  ngOnInit(): void{
    this.IntevaloHoras(new Date());
    this.get_citas(new Date())
  }

  //ESTO SE USA PARA CREAR EL INTERVALO DE HORAS CON UN GAP DE 15 MINUTOS ENTRE CADA HORA
  IntevaloHoras(fecha_actual:Date){
    let HorasInicio:number = 0;
    let HorasFin:number = 23;
    let intervaloHorasMinutos:number = 15;

    for ( let i = HorasInicio; i <= HorasFin; i++){
      for ( let j = 0; j< 60; j += intervaloHorasMinutos){
        let hora= i.toString().padStart(2, "0");
        let minuto = j.toString().padStart(2, "0");
        this.datosCitas?.push({
          id:0,
          hora: `${hora}:${minuto}:00`,
          fecha: fecha_actual,
          nombre_cliente: '',
          trabajo:'',
          telefono:''
        });
      }
    }
  }

  /**
   * METODO QUE SE USA EN EL DOM PARA OBTENER LA FECHA QUE SELECCIONA EL USUARIO DESDE EL CALENDARIO
   */
  selectDate(){
    this.get_citas(this.dateCalendario);
  }
  
  /**
   * Metodo que se utiliza en el dom para que cuando el usuario relize un click sobre una hora 
   * le devuelva los datos de esa zona horaria
   */
  getDatoCita(dato:Citas){
    this.show(dato);
  }
  show(dato:Citas){
    this.ref =  this.dialogService.open(ComponenteCuadroDialogoComponent,
      {
        data:{
          datosCita: dato
        },
        width: '80%',
      });

    this.ref.onClose.subscribe((data:any)=>{
      if(data){
        console.log(JSON.stringify(data));
        this.get_citas(this.dateCalendario);
      }
    });
  }

  /**
   * 
   * @param fecha_actual 
   * EN EL PARAMETRO LE PASAMOS LA FECHA QUE EL USUARIO SELECCIONA EN EL CALENDARIO,
   * Y POR DEFECTO GENERA LA FECHA ACTUAL DEL DIA EN EL QUE EL USUARIO INICIA EL SISTEMA
   * 
   * METODO QUE SE ENCARGA MOSTRAR LOS DATOS DE LAS CITAS EN EL DOM
   */
  async get_citas(fecha_actual:Date){
    //ESTE FOR SUSTITUYE LA FECHA DE LOS OBJETOS POR LA FECHA SELECCIONAD EN EL CALENDARIO
    this.datosCitas = this.datosCitas.map<Citas>((cita) => ({
      id:0,
      hora: cita.hora,
      fecha: fecha_actual,
      nombre_cliente:'',
      telefono:'',
      trabajo:''
    }));
    
    await this.get_citas_bd();
    for (const item of this.datosCitaApi) {
      if(item.fecha === format(fecha_actual, 'YYYY-MM-DD')){
        const indexHora = this.datosCitas.findIndex(cita => cita.hora === item.hora);
        if(indexHora!== -1){
          this.datosCitas[indexHora] ={
            id : item.id,
            hora: item.hora,
            fecha: fecha_actual,
            nombre_cliente: item.nombre_cliente,
            trabajo: item.trabajo,
            telefono: item.telefono
          }
        }
      }
    }
  }
  /**
   * OBTENEMOS LOS DATOS DESDE LA API
   */
  async get_citas_bd() {
    await this.service.getAllCitas().then(value =>{
      this.datosCitaApi = value;
    });
  }

}
