import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  categorias: any[] = [];
  productos: any[] = [];



  constructor(private productoService: ProductoService) { }
  objectKeys: any;

  filtrado(categoria:number){
    this.productoService.obtenerProductosFiltrado(categoria).subscribe(respuesta => {
      this.productos = respuesta as any;
    })
  }
  aniadir(id:number){
    alert(id)
  }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.productos = respuesta as any;
    })
    this.productoService.obtenerCategorias().subscribe(respuesta => {
      this.categorias = respuesta as any;
    })
  }



}
