import { Component } from '@angular/core';
import { ComponentesPrimengModule } from '../../modulos/componentes-primeng-module/componentes-primeng.module';
import { debug } from 'console';



@Component({
  selector: 'app-view-citas',
  standalone: true,
  // imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule],
  imports: [ComponentesPrimengModule],
  providers:[],
  templateUrl: './view-citas.component.html',
  styleUrl: './view-citas.component.css'
})

export class ViewCitasComponent {
  date: Date | undefined;
  horas: string[] = this.IntevaloHoras();
  public IntevaloHoras(): string[]{
    let arrayHoras:string[] = [];
    let HorasInicio:number = 0;
    let HorasFin:number = 23;
    let intervaloHorasMinutos:number = 15;

    for ( let i = HorasInicio; i <= HorasFin; i++){
      for ( let j = 0; j< 60; j += intervaloHorasMinutos){
        let hora= i.toString().padStart(2, "0");
        let minuto = j.toString().padStart(2, "0");
        arrayHoras.push(`${hora}:${minuto}`);
      }
    }
    return arrayHoras;
  }
  

}
