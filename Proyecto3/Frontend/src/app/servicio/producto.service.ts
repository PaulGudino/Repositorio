import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrito } from '../interfaz/carrito';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  obtenerProductos() {
    return this.http.get('http://localhost:3000/api/productos')
    }

  obtenerProductosFiltrado(id:number) {
    return this.http.get('http://localhost:3000/api/productos/'+id)
    }

  obtenerProductosFiltradoCategoria(id:number) {
    return this.http.get('http://localhost:3000/api/productos/categoria/'+id)
    }

  obtenerCategorias() {
  return this.http.get('http://localhost:3000/api/categoria')
  }

  obtenerUsuarios() {
    return this.http.get('http://localhost:3000/api/usuario')
    }

  agregarCarrito(carrito:Carrito){
      this.http.post('https://proyecto-dawm-default-rtdb.firebaseio.com/carrito.json',carrito).subscribe(
        respuesta => console.log(respuesta) )
    }

  obtenerCarrito(id:number) {
    return this.http.get('https://proyecto-dawm-default-rtdb.firebaseio.com/carrito.json?orderBy=%22cliente%22&equalTo='+id.toString())
  }

  obtenerOrdenes() {
    return this.http.get('https://proyecto-dawm-default-rtdb.firebaseio.com/collection.json')
    }

  obtenerOrdenesCliente(id:number) {
    return this.http.get('https://proyecto-dawm-default-rtdb.firebaseio.com/collection.json?orderBy=%22cliente%22&equalTo='+id.toString())
    }
}
