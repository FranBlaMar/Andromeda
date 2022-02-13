import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartadoComponent } from './apartado/apartado.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path:"", component: ApartadoComponent, pathMatch: "full"
  },
  {
    path:"info/:nombreApartado", component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class WikiRoutingModule { }