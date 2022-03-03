import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { comentario, post } from '../interfaces/foro.interface';
import { DatosUserService } from '../../usuario/services/datosUser.service';
import { userCompleto } from 'src/app/login/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})

export class ForoService {
private URLBase: string = environment.URLBase;

  user!: userCompleto;
  constructor( private http: HttpClient, private servicioUsuario: DatosUserService) { }
  headers = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('jwt')}`  || '' );

  //Metodo para obtener todos los posts de la base de datos
  getPosts() {
    const url = `${ this.URLBase }/post`;
    return this.http.get<post[]>( url, { headers: this.headers } )
  }

  //Metodo para obtener un post mediante su id
  getPostPorId( id: number){
    const url = `${ this.URLBase }/post/${id}`;
    return this.http.get<post>( url, { headers: this.headers } )
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
    postNuevo.author = this.user;
    //Mando la petición al back
    return this.http.post<post>(url, postNuevo, { headers: this.headers })
  }

  //Metodo para obtener comentarios de un post
  obtenerComentarios(post: post){
    const url = `${ this.URLBase }/post/${post.id}/comentario`;
    //Mando la petición al back
    return this.http.get<comentario[]>(url, { headers: this.headers })
  }

  //Metodo para crear un comentario
  crearComentarios(post:post, comentario: comentario){
    const url = `${ this.URLBase }/post/${post.id}/comentario`;
    comentario.author = this.obtenerUsuario();
    console.log(comentario.author);
    console.log(this.obtenerUsuario());
    //Mando la petición al back
    return this.http.post<comentario>(url, comentario, { headers: this.headers })
  }

}