import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Informacion } from '../interfaces/wiki.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  url: string = "http://localhost:8080/wiki"
  constructor(private http: HttpClient) { }

  enviarPeticion(apartado: string, busqueda: string){
    return this.http.get<Informacion>(this.url + `/${apartado}/informacion/${busqueda}`);
  }
}

