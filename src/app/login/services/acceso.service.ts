import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userLogin, userRegister } from '../interfaces/login.interface';
import { RespuestaAuth } from '../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})

export class AccesoService {
  private URLBase: string = environment.URLBase;
  constructor( private http: HttpClient) { }

  //Metodo para hacer login
  login(user: userLogin){
    const url = `${this.URLBase}/auth/login`;
    return this.http.post<RespuestaAuth>(url, user);
  }
  //Metodo para registrar
  register(user: userRegister){
    const url = `${this.URLBase}/auth/register`;
    return this.http.post<RespuestaAuth>(url, user);
  }

  //Metodo para comprobar si un token es valido
  comprobarToken():Observable<RespuestaAuth>{
    const url = `${ this.URLBase }/user`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('jwt')}`  || '' );
    return this.http.get<RespuestaAuth>( url, { headers } ) 
  }
  
}