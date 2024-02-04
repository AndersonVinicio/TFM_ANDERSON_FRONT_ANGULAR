import { Component } from '@angular/core';
import { ComponentesPrimengModule } from '../../modulos/componentes-primeng-module/componentes-primeng.module';



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
}
