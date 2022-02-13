import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiarioComponent } from './noticiario/noticiario.component';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NoticiarioComponent
  ],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    SharedModule
  ]
})
export class NoticiasModule { }
