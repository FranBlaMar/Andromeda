import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartadoService {

  url: string = "http://localhost:8080/wiki"
  constructor(private http: HttpClient) { }

  obtenerApartados(){
    return this.http.get<String[]>(this.url);
  }
}
