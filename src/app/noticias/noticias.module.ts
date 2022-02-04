import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiarioComponent } from './noticiario/noticiario.component';
import { NoticiasRoutingModule } from './noticias-routing.module';



@NgModule({
  declarations: [
    NoticiarioComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }
