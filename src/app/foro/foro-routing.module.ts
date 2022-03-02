import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPostComponent } from './crear-post/crear-post.component';
import { DetallesPostComponent } from './detalles-post/detalles-post.component';
import { EntradasComponent } from './entradas/entradas.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"",component: MainComponent, children: [
    { path: '', component: EntradasComponent },
    { path: 'crearPost', component: CrearPostComponent},
    { path: ':idPost', component: DetallesPostComponent},
    { path: '**', redirectTo: 'post' }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ForoRoutingModule { }