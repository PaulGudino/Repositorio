import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { Ordenes } from 'src/app/interfaz/ordenes';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  ordenes: any[] = [];
  productos: any[] = [];

  constructor(private productoService: ProductoService) { }

  filtrado(producto:number){
    this.productoService.obtenerOrdenesProducto(producto).subscribe(respuesta => {
      this.ordenes = respuesta as any[];
    })
  }

  ngOnInit(): void {

    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.productos = respuesta as any;
    })
    this.productoService.obtenerOrdenes().subscribe(respuesta => {
      this.ordenes = respuesta as any;
    })

  }
  
}
