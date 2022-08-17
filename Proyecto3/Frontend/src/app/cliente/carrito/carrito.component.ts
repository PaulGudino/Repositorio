import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: any[] = [];
  productos_añadidos : any[] =[1]

  constructor(private productoService: ProductoService) { }
  objectKeys: any;

  ngOnInit(): void {
    this.productoService.obtenerProductosFiltrado(this.productos_añadidos[0]).subscribe(respuesta => {
      this.productos = respuesta as any;
    })
  }

}
