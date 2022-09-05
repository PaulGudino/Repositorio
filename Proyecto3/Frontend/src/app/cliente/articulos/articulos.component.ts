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
    id: 0,
    producto: 0,
    nombre: '',
    imagen: '',
    marca: '',
    cliente: 0
  }

  categorias: any[] = [];
  productos: any[] = [];
  productosañadidos: any[] = [];
  carrito : any[] = [];
  carrito2: Carrito[] = [];
  valor : number = 0;

  
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
    this.productoService.obtenerCarrito().subscribe(respuesta => {
      this.carrito = respuesta as any;

      for (var clave in this.carrito) {
        if (this.carrito.hasOwnProperty(clave)) {
          this.carrito2.push(this.carrito[clave]);
        }
      }
      this.valor = this.carrito2.length;
    })
  }

  aniadir(producto:number){

    this.item.id = this.valor + 1;
    this.item.producto = this.productosañadidos[producto-1].id;
    this.item.nombre = this.productosañadidos[producto-1].nombre; 
    this.item.imagen = this.productosañadidos[producto-1].imagen;
    this.item.marca = this.productosañadidos[producto-1].marca;
    this.item.cliente = 1;

    console.log("Holas"+this.valor);
    console.log(this.carrito);
    this.valor = this.valor + 1;
  
    this.productoService.agregarCarrito(this.item);
  }



}
