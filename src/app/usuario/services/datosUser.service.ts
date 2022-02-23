import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { userCompleto } from 'src/app/login/interfaces/login.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DatosUserService {
  private URLBase: string = environment.URLBase;
  constructor( private http: HttpClient) { }

  //Metodo para obtener un usuario desde el token del localStorage
  obtenerUsuario():Observable<userCompleto>{
    const url = `${ this.URLBase }/user`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('jwt')}`  || '' );
    return this.http.get<userCompleto>( url, { headers } ) 
  }
  
  //Metodo para modificar datos de un usuario en la base de datos
  modificarUsuario(user: userCompleto){
    const url= `${ this.URLBase }/user`;
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('jwt')}`  || '' );
    headers.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    return this.http.put<userCompleto>( url, user, { headers }  )
  }
}