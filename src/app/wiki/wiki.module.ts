import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiRoutingModule } from './wiki-routing.module';
import { ApartadoComponent } from './apartado/apartado.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ApartadoComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    WikiRoutingModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class WikiModule { }
