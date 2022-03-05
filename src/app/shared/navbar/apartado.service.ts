import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { apartado } from '../../wiki/interfaces/wiki.interface';

@Injectable({
  providedIn: 'root'
})
export class ApartadoService {

  url: string = environment.URLBase +"/wiki";
  constructor(private http: HttpClient) { }

  enviarPeticion(){
    return this.http.get<apartado[]>(this.url);
  }
}
