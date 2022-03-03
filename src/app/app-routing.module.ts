import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guardian } from './guardian.service';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:"main", component: MainComponent
  },
  {
    path: 'info/:nombreApartado',
    loadChildren: () => import('./wiki/wiki.module').then(m => m.WikiModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasModule)
  },
  {
    path: 'foro',
    loadChildren: () => import('./foro/foro.module').then(m => m.ForoModule),  canActivate: [Guardian]
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
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule), canActivate: [Guardian]
  },
  {
    path:"**", component: MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
