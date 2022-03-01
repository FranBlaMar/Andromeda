import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { post } from '../interfaces/foro.interface';

@Injectable({
  providedIn: 'root'
})

export class ForoService {
private URLBase: string = environment.URLBase;

  constructor( private http: HttpClient) { }


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
}