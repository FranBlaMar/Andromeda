import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosComponent } from './datos/datos.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { EditDatosComponent } from './edit-datos/edit-datos.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatosComponent,
    EditDatosComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
