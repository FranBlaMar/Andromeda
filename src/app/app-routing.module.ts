import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:"", component: InicioComponent, pathMatch: "full"
  },
  {
    path:"main", component: MainComponent, pathMatch: "full"
  },
  {
    path: 'wiki',
    loadChildren: () => import('./wiki/wiki.module').then(m => m.WikiModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasModule)
  },
  {
    path: 'foro',
    loadChildren: () => import('./foro/foro.module').then(m => m.ForoModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path:"**", redirectTo:""
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
