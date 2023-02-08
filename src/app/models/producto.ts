export class Producto {

    id: number;
    nombre: string;
    nacionalidad: string;
    fecha_nacimiento: Date;
    estado: string;
    autorizacion: number;
    cedula: number;

    constructor(id: number, nombre: string, nacionalidad: string, fecha_nacimiento: Date, estado: string, autorizacion: number, cedula: number) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.estado = estado;
        this.autorizacion = autorizacion;
        this.cedula = cedula;
    }
}
