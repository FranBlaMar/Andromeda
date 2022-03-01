import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { post } from '../interfaces/foro.interface';
import { ForoService } from '../services/foro.service';
@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styles: [ 
  ]
})
export class EntradasComponent implements OnInit, OnDestroy {

  listaPosts: post[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private servicio: ForoService) { }

  ngOnInit(): void {
    this.obtenerPosts();
  }

  //Metodo para obtener los posts de la base de datos y mostrarlos en el html
  obtenerPosts(){
    this.servicio.getPosts()
    .subscribe(resp => {
      this.listaPosts = resp;
      this.dtTrigger.next(this.listaPosts);
    }
    )
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
