import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradasComponent } from './entradas/entradas.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ForoRoutingModule } from './foro-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { DetallesPostComponent } from './detalles-post/detalles-post.component';



@NgModule({
  declarations: [
    EntradasComponent,
    ComentariosComponent,
    DetallesPostComponent
  ],
  imports: [
    CommonModule,
    ForoRoutingModule,
    DataTablesModule,
    RouterModule
  ]
})
export class ForoModule { }
