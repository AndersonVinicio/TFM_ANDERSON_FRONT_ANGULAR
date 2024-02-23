import { Component } from '@angular/core';
import { ComponentesPrimengModule, DialogService, DynamicDialogRef} from '../../modulos/componentes-primeng-module/componentes-primeng.module';
import { debug, log } from 'console';
import { Observable } from 'rxjs';
import { Citas } from '../../interfaces/citas';
import { ComponenteCuadroDialogoComponent } from '../../componentes/componentesPrimeNg/componente-cuadro-dialogo/componente-cuadro-dialogo.component';







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
  dateCalendario:Date = new Date();
  datecalendario2 = this.dateCalendario;
  dateFormat:string | undefined;
  datosCitas: Citas [] = [];

  //variable para el cuadro de dialogo
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService){
    // console.log(this.dateFormat)
    this.IntevaloHoras();
    
  }
  IntevaloHoras(){
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
          nombre: '',
          trabajo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae ab adipisci ipsam libero consequuntur voluptas. Neque suscipit exercitationem quo repellat incidunt odio nobis consectetur odit nihil aspernatur illum doloribus possimus, nam reiciendis qui nostrum itaque totam beatae porro architecto? Aut tempore tenetur doloremque ipsa error architecto neque doloribus fugit reiciendis, mollitia temporibus nulla quo necessitatibus. Iusto maiores similique dignissimos aut omnis quia veniam dolores, expedita in fugiat placeat porro voluptas. Reiciendis necessitatibus enim perferendis, fugiat nulla dignissimos odit maxime consequatur minus deleniti, quia magni nobis quisquam iusto, blanditiis minima facilis ea inventore. Harum quas officiis sunt autem dolores soluta velit deserunt nostrum dolor labore nisi quia ut sed, reiciendis consectetur adipisci molestiae doloribus explicabo placeat error ipsa. Possimus saepe quam, aspernatur nemo repellendus minus impedit minima ipsam adipisci quos iure. Quisquam magni autem sint non deleniti, ipsam dolorum neque est ullam quod recusandae exercitationem eius! Necessitatibus laudantium deserunt quam praesentium. Aliquid odio accusantium, iusto sint aspernatur tenetur laudantium error alias minima quaerat saepe consequatur impedit! Quibusdam voluptatum aliquid modi veritatis perferendis. Impedit maxime illum dolorum suscipit totam odio quos ex optio, necessitatibus eum voluptates repellendus, ratione iure, culpa provident laudantium recusandae animi enim ipsa fuga. Natus nam sit vitae.'
        });
      }
    }
  }

  selectDate(){
    this.dateFormat = this.dateCalendario.toLocaleDateString();
    alert("SE HA SELECCIONADO UNA FECHA"+ this.dateFormat);
  }
  
  getDatoCita(dato:Citas){
    let contenido = dato;
    alert(dato);
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

}
