import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartadoComponent } from './apartado/apartado.component';

const routes: Routes = [
  {
    path:"", component: ApartadoComponent, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class WikiRoutingModule { }