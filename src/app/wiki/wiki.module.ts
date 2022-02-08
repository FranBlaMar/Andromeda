import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiRoutingModule } from './wiki-routing.module';
import { ApartadoComponent } from './apartado/apartado.component';



@NgModule({
  declarations: [
    ApartadoComponent
  ],
  imports: [
    CommonModule,
    WikiRoutingModule
  ]
})
export class WikiModule { }
