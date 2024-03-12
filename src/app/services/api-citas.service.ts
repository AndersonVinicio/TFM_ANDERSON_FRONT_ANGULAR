import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citas } from '../interfaces/citas';

@Injectable({
  providedIn: 'root'
})
export class ApiCitasService {

  constructor(private http: HttpClient) { }
  getAllCitas(): Observable<Citas>{
    return this.http.get<Citas>('http://127.0.0.1:8000/api/showCitas');
  }

  addCita(data:Citas){
    return this.http.post('http://127.0.0.1:8000/api/addCita', data)
  }
}
