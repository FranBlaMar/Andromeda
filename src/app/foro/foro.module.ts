import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradasComponent } from './entradas/entradas.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ForoRoutingModule } from './foro-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { DetallesPostComponent } from './detalles-post/detalles-post.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { CrearPostComponent } from './crear-post/crear-post.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EntradasComponent,
    ComentariosComponent,
    DetallesPostComponent,
    MainComponent,
    CrearPostComponent
  ],
  imports: [
    CommonModule,
    ForoRoutingModule,
    DataTablesModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ForoModule { }
