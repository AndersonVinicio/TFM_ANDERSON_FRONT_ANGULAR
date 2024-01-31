import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewCitasComponent } from './pages/view-citas/view-citas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ViewCitasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-sistema-gestion-citas';
}
