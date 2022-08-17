import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  obtenerCategorias() {
  return this.http.get('http://localhost:3000/api/categoria')
  }
  obtenerUsuarios() {
    return this.http.get('http://localhost:3000/api/usuario')
    }
    
}
