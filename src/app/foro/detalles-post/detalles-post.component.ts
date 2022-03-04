import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { comentario, post } from '../interfaces/foro.interface';
import { ForoService } from '../services/foro.service';
import { userCompleto } from 'src/app/login/interfaces/login.interface';

@Component({
  selector: 'app-detalles-post',
  templateUrl: './detalles-post.component.html',
  styleUrls: ['./detalles-post.component.css']
})
export class DetallesPostComponent implements OnInit {
  carga: boolean = false;
  @Output() mostrarComentarios:EventEmitter<comentario[]> = new EventEmitter<comentario[]>(); 

  comentarios: comentario [] = [];

  post!: post;
  constructor(private servicio: ForoService, private routeSnap: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.getPost(); 
  }

  //Metodo para obtener un post por id
  getPost(){
    const id = this.routeSnap.snapshot.params['idPost'];
    this.servicio.getPostPorId(id)
    .subscribe( resp => {
      this.post = resp, 
      this.comentarios = resp.comments,
      this.mostrarComentarios.emit(this.comentarios),
      this.carga = true})
  }

  //Metodo para volver al foro
  volverAForo(){
    this.route.navigateByUrl('/foro');
  }
}
