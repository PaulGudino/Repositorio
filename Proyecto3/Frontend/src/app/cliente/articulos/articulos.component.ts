import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { Carrito } from 'src/app/interfaz/carrito';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  item: Carrito = {
    producto: 0,
    nombre: '',
    imagen: '',
    marca: '',
    cliente: 0
  }

  categorias: any[] = [];
  productos: any[] = [];
  productosañadidos: any[] = [];

  
  constructor(private productoService: ProductoService) { }
  objectKeys: any;

  filtrado(categoria:number){
    this.productoService.obtenerProductosFiltradoCategoria(categoria).subscribe(respuesta => {
      this.productos = respuesta as any;
    })
  }
  
  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.productos = respuesta as any;
    })
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.productosañadidos = respuesta as any;
    })
    this.productoService.obtenerCategorias().subscribe(respuesta => {
      this.categorias = respuesta as any;
    })
  }

  aniadir(producto:number){
    this.item.producto = this.productosañadidos[producto-1].id;
    this.item.nombre = this.productosañadidos[producto-1].nombre; 
    this.item.imagen = this.productosañadidos[producto-1].imagen;
    this.item.marca = this.productosañadidos[producto-1].marca;
    this.item.cliente = 1;
    
    this.productoService.agregarCarrito(this.item);
  }



}
