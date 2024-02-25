import { Component } from '@angular/core';
import { ComponentesPrimengModule, DialogService, DynamicDialogRef} from '../../modulos/componentes-primeng-module/componentes-primeng.module';
import { debug, log } from 'console';
import { Observable } from 'rxjs';
import { Citas } from '../../interfaces/citas';
import { ComponenteCuadroDialogoComponent } from '../../componentes/componentesPrimeNg/componente-cuadro-dialogo/componente-cuadro-dialogo.component';
import { format } from '@formkit/tempo';






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

export class ViewCitasComponent{
  BD_PRUEBA = [
    {
        "nombre": "Cliente 1",
        "trabajo": "Peinado",
        "fecha": "2024-02-25",
        "hora": "10:45"
    },
    {
        "nombre": "Cliente 2",
        "trabajo": "Tinte",
        "fecha": "2024-02-25",
        "hora": "14:30"
    },
    {
        "nombre": "Cliente 3",
        "trabajo": "Corte de cabello",
        "fecha": "2024-02-25",
        "hora": "11:15"
    },
    {
        "nombre": "Cliente 4",
        "trabajo": "Peinado",
        "fecha": "2024-02-26",
        "hora": "17:00"
    },
    {
        "nombre": "Cliente 5",
        "trabajo": "Corte de cabello",
        "fecha": "2024-02-26",
        "hora": "10:45"
    },
    {
        "nombre": "Cliente 6",
        "trabajo": "Tinte",
        "fecha": "2024-02-26",
        "hora": "16:15"
    },
    {
        "nombre": "Cliente 7",
        "trabajo": "Peinado",
        "fecha": "2024-02-26",
        "hora": "13:30"
    },
    {
        "nombre": "Cliente 8",
        "trabajo": "Corte de cabello",
        "fecha": "2024-02-27",
        "hora": "10:15"
    },
    {
        "nombre": "Cliente 9",
        "trabajo": "Tinte",
        "fecha": "2024-02-27",
        "hora": "18:45"
    },
    {
        "nombre": "Cliente 10",
        "trabajo": "Peinado",
        "fecha": "2024-02-27",
        "hora": "15:00"
    },
    {
        "nombre": "Cliente 11",
        "trabajo": "Corte de cabello",
        "fecha": "2024-02-28",
        "hora": "09:30"
    },
    {
        "nombre": "Cliente 12",
        "trabajo": "Tinte",
        "fecha": "2024-02-28",
        "hora": "13:15"
    },
    {
        "nombre": "Cliente 13",
        "trabajo": "Peinado",
        "fecha": "2024-02-28",
        "hora": "18:00"
    },
    {
        "nombre": "Cliente 14",
        "trabajo": "Corte de cabello",
        "fecha": "2024-03-01",
        "hora": "11:45"
    },
    {
        "nombre": "Cliente 15",
        "trabajo": "Tinte",
        "fecha": "2024-03-01",
        "hora": "16:30"
    },
    {
        "nombre": "Cliente 16",
        "trabajo": "Peinado",
        "fecha": "2024-03-02",
        "hora": "09:15"
    },
    {
        "nombre": "Cliente 17",
        "trabajo": "Corte de cabello",
        "fecha": "2024-03-02",
        "hora": "14:00"
    },
    {
        "nombre": "Cliente 18",
        "trabajo": "Tinte",
        "fecha": "2024-03-03",
        "hora": "10:45"
    },
    {
        "nombre": "Cliente 19",
        "trabajo": "Peinado",
        "fecha": "2024-03-03",
        "hora": "16:20"
    },
    {
        "nombre": "Cliente 20",
        "trabajo": "Corte de cabello",
        "fecha": "2024-03-04",
        "hora": "12:00"
    }
]



  dateCalendario:Date = new Date();
  // datecalendario2 = this.dateCalendario;
  dateFormat:string | undefined;
  datosCitas: Citas [] = [];

  //variable para el cuadro de dialogo
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService){
    // console.log(this.dateFormat)
    // this.IntevaloHoras();
    this.get_citas(this.dateCalendario);
  }
  IntevaloHoras(fecha_actual:Date){
    let HorasInicio:number = 0;
    let HorasFin:number = 23;
    let intervaloHorasMinutos:number = 15;

    for ( let i = HorasInicio; i <= HorasFin; i++){
      for ( let j = 0; j< 60; j += intervaloHorasMinutos){
        let hora= i.toString().padStart(2, "0");
        let minuto = j.toString().padStart(2, "0");
        // arrayHoras.push(`${hora}:${minuto}`);
        this.datosCitas?.push({
          hora: `${hora}:${minuto}`,
          fecha: fecha_actual,
          nombre: '',
          trabajo:''
          // trabajo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae ab adipisci ipsam libero consequuntur voluptas. Neque suscipit exercitationem quo repellat incidunt odio nobis consectetur odit nihil aspernatur illum doloribus possimus, nam reiciendis qui nostrum itaque totam beatae porro architecto? Aut tempore tenetur doloremque ipsa error architecto neque doloribus fugit reiciendis, mollitia temporibus nulla quo necessitatibus. Iusto maiores similique dignissimos aut omnis quia veniam dolores, expedita in fugiat placeat porro voluptas. Reiciendis necessitatibus enim perferendis, fugiat nulla dignissimos odit maxime consequatur minus deleniti, quia magni nobis quisquam iusto, blanditiis minima facilis ea inventore. Harum quas officiis sunt autem dolores soluta velit deserunt nostrum dolor labore nisi quia ut sed, reiciendis consectetur adipisci molestiae doloribus explicabo placeat error ipsa. Possimus saepe quam, aspernatur nemo repellendus minus impedit minima ipsam adipisci quos iure. Quisquam magni autem sint non deleniti, ipsam dolorum neque est ullam quod recusandae exercitationem eius! Necessitatibus laudantium deserunt quam praesentium. Aliquid odio accusantium, iusto sint aspernatur tenetur laudantium error alias minima quaerat saepe consequatur impedit! Quibusdam voluptatum aliquid modi veritatis perferendis. Impedit maxime illum dolorum suscipit totam odio quos ex optio, necessitatibus eum voluptates repellendus, ratione iure, culpa provident laudantium recusandae animi enim ipsa fuga. Natus nam sit vitae.'
        });
      }
    }
  }

  selectDate(){
    //OBTENEMOS LA FECHA SELECCIONADA DESDE EL CALENDARIO
    this.get_citas(this.dateCalendario);
    alert(this.dateCalendario);
  }
  getDatoCita(dato:Citas){
    // alert(dato);
    this.show(dato);

    // console.log(this.ref)
  }
  show(dato:Citas){
    this.ref =  this.dialogService.open(ComponenteCuadroDialogoComponent,
      {
        header:'NUEVA CITA',
        data:{
          datosCita: dato
        },
        width: '80%'
      });

    this.ref.onClose.subscribe((data:any)=>{
      if(data){
        alert('dato que viene desde el formulario')
      }
    });
  }

  get_citas(fecha_actual:Date){
    this.datosCitas.length = 0;
    this.IntevaloHoras(fecha_actual);
    for (const item of this.BD_PRUEBA) {
      // console.log(this.dateCalendario.toLocaleDateString())
      if(item.fecha === format(fecha_actual, 'YYYY-MM-DD')){
        const indexHora = this.datosCitas.findIndex(cita => cita.hora === item.hora);
        if(indexHora!== -1){
          this.datosCitas[indexHora] ={
            hora: item.hora,
            fecha: fecha_actual,
            nombre: item.nombre,
            trabajo: item.trabajo
          }
        }
      }
    }
  }

}
