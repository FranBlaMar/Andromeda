import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Informacion } from '../interfaces/wiki.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  url: string = environment.URLBase;
  constructor(private http: HttpClient) { }

  //Metodo para realizar la peticion get la info de un apartado de la wiki
  enviarPeticion(apartado: string, busqueda: string){
    return this.http.get<Informacion>(this.url + '/wiki' + `/${apartado}/informacion/${busqueda}`);
  }
}

