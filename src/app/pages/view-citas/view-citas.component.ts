import { Component, OnInit } from '@angular/core';
import { ComponentesPrimengModule, DialogService, DynamicDialogRef} from '../../modulos/componentes-primeng-module/componentes-primeng.module';
import { Observable, Subscription, interval } from 'rxjs';
import { Citas } from '../../interfaces/citas';
import { ComponenteCuadroDialogoComponent } from '../../componentes/componentesPrimeNg/componente-cuadro-dialogo/componente-cuadro-dialogo.component';
import { format } from '@formkit/tempo';
import { ApiCitasService } from '../../services/api-citas.service';






@Component({
  selector: 'app-view-citas',
  standalone: true,
  // imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
  imports: [
    ComponentesPrimengModule,
    ComponenteCuadroDialogoComponent  
  ],
  providers:[
    DialogService,
    DynamicDialogRef
  ],
  templateUrl: './view-citas.component.html',
  styleUrl: './view-citas.component.css'
})

export class ViewCitasComponent implements OnInit{
//   BD_PRUEBA = [
//     {
//         "nombre": "Cliente 1",
//         "trabajo": "Peinado",
//         "fecha": "2024-03-03",
//         "hora": "08:00",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 2",
//         "trabajo": "Tinte",
//         "fecha": "2024-03-04",
//         "hora": "12:45",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 3",
//         "trabajo": "Corte de cabello",
//         "fecha": "2024-03-04",
//         "hora": "11:15",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 4",
//         "trabajo": "Peinado",
//         "fecha": "2024-03-03",
//         "hora": "18:00",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 5",
//         "trabajo": "Corte de cabello",
//         "fecha": "2024-03-04",
//         "hora": "14:45",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 6",
//         "trabajo": "Tinte",
//         "fecha": "2024-03-06",
//         "hora": "09:45",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 7",
//         "trabajo": "Peinado",
//         "fecha": "2024-03-06",
//         "hora": "10:15",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 8",
//         "trabajo": "Corte de cabello",
//         "fecha": "2024-03-05",
//         "hora": "14:30",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 9",
//         "trabajo": "Tinte",
//         "fecha": "2024-03-03",
//         "hora": "15:30",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 10",
//         "trabajo": "Peinado",
//         "fecha": "2024-03-06",
//         "hora": "14:15",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 11",
//         "trabajo": "Corte de cabello",
//         "fecha": "2024-03-06",
//         "hora": "17:00",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 12",
//         "trabajo": "Tinte",
//         "fecha": "2024-03-03",
//         "hora": "13:00",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 13",
//         "trabajo": "Peinado",
//         "fecha": "2024-03-05",
//         "hora": "11:45",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 14",
//         "trabajo": "Corte de cabello",
//         "fecha": "2024-03-03",
//         "hora": "17:45",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 15",
//         "trabajo": "Tinte",
//         "fecha": "2024-03-03",
//         "hora": "19:15",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 16",
//         "trabajo": "Peinado",
//         "fecha": "2024-03-06",
//         "hora": "08:15",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 17",
//         "trabajo": "Corte de cabello",
//         "fecha": "2024-03-03",
//         "hora": "12:30",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 18",
//         "trabajo": "Tinte",
//         "fecha": "2024-03-05",
//         "hora": "16:15",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 19",
//         "trabajo": "Peinado",
//         "fecha": "2024-03-04",
//         "hora": "09:00",
//         "telefono": "123456789"
//     },
//     {
//         "nombre": "Cliente 20",
//         "trabajo": "Corte de cabello",
//         "fecha": "2024-03-04",
//         "hora": "13:30",
//         "telefono": "123456789"
//     }
// ]

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
          // trabajo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae ab adipisci ipsam libero consequuntur voluptas. Neque suscipit exercitationem quo repellat incidunt odio nobis consectetur odit nihil aspernatur illum doloribus possimus, nam reiciendis qui nostrum itaque totam beatae porro architecto? Aut tempore tenetur doloremque ipsa error architecto neque doloribus fugit reiciendis, mollitia temporibus nulla quo necessitatibus. Iusto maiores similique dignissimos aut omnis quia veniam dolores, expedita in fugiat placeat porro voluptas. Reiciendis necessitatibus enim perferendis, fugiat nulla dignissimos odit maxime consequatur minus deleniti, quia magni nobis quisquam iusto, blanditiis minima facilis ea inventore. Harum quas officiis sunt autem dolores soluta velit deserunt nostrum dolor labore nisi quia ut sed, reiciendis consectetur adipisci molestiae doloribus explicabo placeat error ipsa. Possimus saepe quam, aspernatur nemo repellendus minus impedit minima ipsam adipisci quos iure. Quisquam magni autem sint non deleniti, ipsam dolorum neque est ullam quod recusandae exercitationem eius! Necessitatibus laudantium deserunt quam praesentium. Aliquid odio accusantium, iusto sint aspernatur tenetur laudantium error alias minima quaerat saepe consequatur impedit! Quibusdam voluptatum aliquid modi veritatis perferendis. Impedit maxime illum dolorum suscipit totam odio quos ex optio, necessitatibus eum voluptates repellendus, ratione iure, culpa provident laudantium recusandae animi enim ipsa fuga. Natus nam sit vitae.'
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
        // header:'CITA',
        data:{
          datosCita: dato
        },
        width: '80%',
      });

    this.ref.onClose.subscribe((data:any)=>{
      if(data){
        //this.delete_cita(data);
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

  // delete_cita(cita_delete:Citas){
  //   const index_cita_delete = this.BD_PRUEBA.findIndex(
  //     cita =>
  //     cita.fecha === cita_delete.fecha && 
  //     cita.hora === cita_delete.hora &&
  //     cita.nombre === cita_delete.nombre_cliente &&
  //     cita.trabajo === cita_delete.trabajo)
  //   if(index_cita_delete !== -1){
  //     //console.log(index_cita_delete);
  //     this.BD_PRUEBA[index_cita_delete] = {
  //         hora: cita_delete.hora,
  //         fecha: cita_delete.fecha.toString(),
  //         nombre: '',
  //         trabajo: '',
  //         telefono: ''
  //     }
  //     //console.log(JSON.stringify(this.BD_PRUEBA[index_cita_delete]));
  //   }
  // }
}
