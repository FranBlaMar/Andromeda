import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiRoutingModule } from './wiki-routing.module';
import { ApartadoComponent } from './apartado/apartado.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ApartadoComponent
  ],
  imports: [
    CommonModule,
    WikiRoutingModule,
    FormsModule
  ]
})
export class WikiModule { }
