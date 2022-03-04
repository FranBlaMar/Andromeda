import { Component, OnInit } from '@angular/core';
import { noticia } from '../interfaces/noticia.interface';
import { NoticiarioService } from './noticiario.service';

@Component({
  selector: 'app-noticiario',
  templateUrl: './noticiario.component.html',
  styleUrls: ['./noticiario.component.css']
})
export class NoticiarioComponent implements OnInit {

  listaNoticias: noticia[] = [];
  constructor(private servicio: NoticiarioService) { }

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  //Metodo para obtener las noticias de la base de datos
  obtenerNoticias(){
    this.servicio.enviarPeticion()
    .subscribe(resp=>{
      this.listaNoticias= resp;
    })
  }
}
