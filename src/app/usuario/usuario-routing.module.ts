import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { EditDatosComponent } from './edit-datos/edit-datos.component';

const routes: Routes = [
  {
    path:"", component: DatosComponent, pathMatch: "full"
  },
  {
    path:"editar", component: EditDatosComponent
  },
  {
    path:"**", redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class UsuarioRoutingModule { }