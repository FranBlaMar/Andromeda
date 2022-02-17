import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { noticia } from '../interfaces/noticia.interface';


@Injectable({
  providedIn: 'root'
})
export class NoticiarioService {

  url: string = environment.URLBase + "/noticia";
  constructor(private http: HttpClient) { }

  enviarPeticion(){
    return this.http.get<noticia[]>(this.url);
  }
}