import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPostComponent } from './detalles-post/detalles-post.component';
import { EntradasComponent } from './entradas/entradas.component';

const routes: Routes = [
  {path:"", component: EntradasComponent, pathMatch: "full"},
  {path:'/:idPost', component: DetallesPostComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ForoRoutingModule { }