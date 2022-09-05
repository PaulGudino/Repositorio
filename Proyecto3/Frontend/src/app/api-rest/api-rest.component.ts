import { Component, OnInit } from '@angular/core';

class metodo{
  nombre:string;
  descripcion:string;

  constructor(nombre:string, descripcion:string){
    this.nombre=nombre;
    this.descripcion=descripcion;
  }
}


@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.css']
})
export class ApiRestComponent implements OnInit {
  metodos:metodo[]=[
  {"nombre":"obtenerProductos","descripcion":"Obtiene todos los productos"},
  {"nombre":"obtenerProductosFiltrado","descripcion":"Obtiene los productos filtrados por id"},
  {"nombre":"obtenerProductosFiltradoCategoria","descripcion":"Obtiene los productos filtrados por categoria"},
  {"nombre":"obtenerCategorias","descripcion":"Obtiene todas las categorias"},
  {"nombre":"obtenerUsuarios","descripcion":"Obtiene todos los usuarios"},
  {"nombre":"crearUsuario","descripcion":"Crea un usuario"},
  {"nombre":"agregarCarrito","descripcion":"Agrega un producto al carrito"},
  {"nombre":"eliminarCarrito","descripcion":"Elimina un producto del carrito"},
  {"nombre":"obtenerCarrito","descripcion":"Obtiene todos los productos que esten en el carrito"},
  {"nombre":"obtenerOrdenes","descripcion":"Obtiene todas las ordenes"},  
  {"nombre":"obtenerOrdenesCliente","descripcion":"Obtiene todas las ordenes por producto"},
]

  constructor() { }

  ngOnInit(): void {
  }

}
