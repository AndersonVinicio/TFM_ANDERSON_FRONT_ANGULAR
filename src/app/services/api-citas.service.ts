import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Citas } from '../interfaces/citas';

@Injectable({
  providedIn: 'root'
})
export class ApiCitasService {

  constructor(private http: HttpClient) { }
  /**
   * 
   * @returns 
   * este metodo devuelve una promesa pro que en la vista voy a usar async await para que no continue el codigo 
   * hasta que se obtengan los datos
   */
  async getAllCitas(): Promise<Citas[]>{
    try {
      const promiseAllCitas = await lastValueFrom(this.http.get<Citas[]>('http://127.0.0.1:8000/api/showCitas'));
      return promiseAllCitas;
    } catch (error) {
      console.error('ERROR AL OBTENER TODAS LAS CITAS: ',error)
      throw error;
    }
  }

  addCita(data:Citas){
    return this.http.post('http://127.0.0.1:8000/api/addCita', data);
  }


  async deleteCita(id:number){
    const promiseDleteCita = await lastValueFrom(this.http.delete('http://127.0.0.1:8000/api/deleteCita/'+id)) ;
    return promiseDleteCita
  }
  
}
