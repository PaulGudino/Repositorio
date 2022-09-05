import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { ArticulosComponent } from './cliente/articulos/articulos.component';
import { MenuComponent } from './cliente/menu/menu.component';
import { CarritoComponent } from './cliente/carrito/carrito.component';
import { OrdenesComponent } from './cliente/ordenes/ordenes.component';
import { ApiRestComponent } from './api-rest/api-rest.component';

const routes: Routes = [
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'carrito' , component: CarritoComponent},
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'api-rest', component: ApiRestComponent },
  { path: "**", redirectTo: "bienvenida" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }