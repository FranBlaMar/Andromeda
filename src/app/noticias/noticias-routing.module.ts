import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiarioComponent } from './noticiario/noticiario.component';

const routes: Routes = [
  {
    path:"", component: NoticiarioComponent, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class NoticiasRoutingModule { }