import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { post } from '../interfaces/foro.interface';
import { DatosUserService } from '../../usuario/services/datosUser.service';
import { userCompleto } from 'src/app/login/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})

export class ForoService {
private URLBase: string = environment.URLBase;

  user!: userCompleto;
  constructor( private http: HttpClient, private servicioUsuario: DatosUserService) { }


  //Metodo para obtener todos los posts de la base de datos
  getPosts() {
    const url = `${ this.URLBase }/post`;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('jwt')}`  || '' );
    return this.http.get<post[]>( url, { headers } )
  }

  //Metodo para obtener un post mediante su id
  getPostPorId( id: number){
    const url = `${ this.URLBase }/post/${id}`;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('jwt')}`  || '' );
    return this.http.get<post>( url, { headers } )
  }

  //Metodo para obtener un usuario para el post
  obtenerUsuario(){
    this.servicioUsuario.obtenerUsuario()
    .subscribe(resp => this.user = resp);
    return this.user;
  }
  //Metodo para crear un post
  crearPost(postNuevo: post){
    const url = `${ this.URLBase }/post`;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('jwt')}`  || '' );
    postNuevo.author = this.user;
    //Mando la petición al back
    return this.http.post<post>(url, postNuevo, {headers})
  }
}