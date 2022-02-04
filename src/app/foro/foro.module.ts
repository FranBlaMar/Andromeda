import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradasComponent } from './entradas/entradas.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ForoRoutingModule } from './foro-routing.module';



@NgModule({
  declarations: [
    EntradasComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    ForoRoutingModule
  ]
})
export class ForoModule { }
