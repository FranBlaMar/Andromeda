import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiRoutingModule } from './wiki-routing.module';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    WikiRoutingModule,
    FormsModule,
    SharedModule,
    RouterModule,
    PinchZoomModule
  ]
})
export class WikiModule { }
