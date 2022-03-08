import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { post } from '../interfaces/foro.interface';
import { ForoService } from '../services/foro.service';
@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styles: [ "tr{ cursor: pointer;} tr:hover{background-color: rgb(241, 214, 123, 0.3)} .container{ min-height: 80vh;}"
  ]
})
export class EntradasComponent implements OnInit, OnDestroy {

  listaPosts: post[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private servicio: ForoService) { }

  ngOnInit(): void {
    this.dtOptions= {
      responsive: true,
      processing: true,
       language: {
         url: "https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json"
        }
    }
    this.obtenerPosts();
  }

  //Metodo para obtener los posts de la base de datos y mostrarlos en el html
  obtenerPosts(){
    this.servicio.getPosts()
    .subscribe(resp => {
      this.listaPosts = resp;
      this.dtTrigger.next(null);
    }
    )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
