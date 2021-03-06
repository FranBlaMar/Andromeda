import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { userLogin, userCompleto } from '../interfaces/login.interface';
import { RespuestaAuth } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})

export class AccesoService {
  private URLBase: string = environment.URLBase;
  constructor( private http: HttpClient) { }

  //Método para hacer login
  login(user: userLogin){
    const url = `${this.URLBase}/auth/login`;
    return this.http.post<RespuestaAuth>(url, user);
  }
  //Método para registrar
  register(user: userCompleto){
    const url = `${this.URLBase}/auth/register`;
    return this.http.post<RespuestaAuth>(url, user);
  }

  //Método para comprobar si un token es valido
  comprobarToken():Observable<userCompleto>{
    const url = `${ this.URLBase }/user`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('jwt')}`  || '' );
    return this.http.get<userCompleto>( url, { headers } ) 
  }
  
  //Método para obtener un usuario por su userName para comprobar si está en uso
  comprobarNombreUsuario(userName: string):Observable<userCompleto>{
    const url = `${ this.URLBase }/auth/${userName}`;
    return this.http.get<userCompleto>(url)
  }
}