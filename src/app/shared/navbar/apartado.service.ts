import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apartado } from '../../wiki/interfaces/wiki.interface';

@Injectable({
  providedIn: 'root'
})
export class ApartadoService {

  url: string = "http://localhost:8080/wiki"
  constructor(private http: HttpClient) { }

  enviarPeticion(){
    return this.http.get<apartado[]>(this.url);
  }
}
