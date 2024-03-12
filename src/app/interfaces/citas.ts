import { Time } from "@angular/common";

export interface Citas {
    id:number
    hora:string;
    fecha:Date | string;
    nombre_cliente:string;
    trabajo:string;
    telefono:string;
    delete?:boolean;
}
