import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lista: Producto[] = [];

  constructor(
    private productoService: ProductoService
  ) { }
  ngOnInit(): void {
    this.productoService.list().subscribe(data => {
      this.lista = data;
      console.log(data)
    });
  }
}
