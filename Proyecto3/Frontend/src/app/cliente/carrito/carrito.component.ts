import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/interfaz/carrito';
import { ProductoService } from '../../servicio/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  carrito2: Carrito[] = [];
  claves: any[] = [];
  

  constructor(private productoService: ProductoService) { }
  objectKeys: any;

  ngOnInit(): void {
    this.productoService.obtenerCarrito().subscribe(respuesta => {
      this.carrito = respuesta as any;

      for (var clave in this.carrito) {
        if (this.carrito.hasOwnProperty(clave)) {
          this.claves.push(clave);
          this.carrito2.push(this.carrito[clave]);
        }
      }
    })
    
  }

  wait(timeToWait: number){
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve(resolve);
      }, timeToWait);
    });
  }

  async eliminar(producto:number){
    this.productoService.eliminarCarrito(producto);
    await this.wait(1000); 
    window.location.reload();
  }

}
