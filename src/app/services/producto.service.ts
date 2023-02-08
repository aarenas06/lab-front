import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL=environment.registroURL;
  constructor(private httpClient: HttpClient) { }

  public list():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL);
  }
}
