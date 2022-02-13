import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { noticia } from '../interfaces/noticia.interface';


@Injectable({
  providedIn: 'root'
})
export class NoticiarioService {

  url: string = "http://localhost:8080/noticia"
  constructor(private http: HttpClient) { }

  enviarPeticion(){
    return this.http.get<noticia[]>(this.url);
  }
}