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

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.productoService.obtenerOrdenesCliente(1).subscribe(respuesta => {
      this.ordenes = respuesta as any[];
    })

  }

}
