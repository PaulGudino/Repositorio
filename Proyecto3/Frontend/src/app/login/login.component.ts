import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicio/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sesionFormulario: FormGroup;
  registroFormulario: FormGroup;
  usuarios: any[] = [];

  constructor(private productoService: ProductoService, private forBuilder: FormBuilder, private router: Router ) {

    this.sesionFormulario = this.forBuilder.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })

    this.registroFormulario = this.forBuilder.group({
      usuario : ['', Validators.required],
      contraseña: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.productoService.obtenerUsuarios().subscribe(respuesta => {
      this.usuarios = respuesta as any;
    })

    this.sesionFormulario = this.forBuilder.group({
      usuario: "",
      contraseña: "",
    })

    this.registroFormulario = this.forBuilder.group({
      nombre : "",
      contraseña: "",
    })
  }
  ingresar(){
    console.log("Ingresando...");
    console.log(this.sesionFormulario.value);
    if(this.sesionFormulario.valid){
      for (let usuario of this.usuarios){
        if(usuario.nombre == this.sesionFormulario.value.usuario && usuario.contraseña == this.sesionFormulario.value.contraseña){
          console.log("Ingreso correcto");
          this.router.navigate(['/articulos']); 
        }
      }
    }
  }
  registrar(){
    console.log("Registrando...");
    console.log(this.registroFormulario.value);
    if(this.registroFormulario.valid){
      this.productoService.crearUsuario(this.registroFormulario.value).subscribe(respuesta => {
        console.log(respuesta);
        this.usuarios.push(respuesta);
        this.registroFormulario.reset();
      })
    }
  }
}
