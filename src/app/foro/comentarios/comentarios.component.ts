import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { userCompleto } from 'src/app/login/interfaces/login.interface';
import { comentario, post } from '../interfaces/foro.interface';
import { ForoService } from '../services/foro.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  post!: post;
  esAutor: boolean = false;
  comentarios: comentario [] = [];
  user!: userCompleto;
  mostrar: boolean = false;
  carga: boolean = false;

  constructor(private servicio: ForoService, private builder: FormBuilder, private routeSnap: ActivatedRoute){}

  formularioComentario: FormGroup = this.builder.group({
    comment: [,[Validators.required]],
  });

  ngOnInit(): void {
    this.user = this.servicio.obtenerUsuario();
    this.getPost();
  }

  //Metodo para obtener un post por id
  getPost(){
    const id = this.routeSnap.snapshot.params['idPost'];
    this.servicio.getPostPorId(id)
    .subscribe( resp => {
      this.post = resp})
  }
  
  //Método para mostrar comentarios de un post
  getComentarios(comentariosEvent: comentario[]){
    let user = localStorage.getItem("userName");
    this.comentarios = comentariosEvent;
    for (let comentario of this.comentarios){
      if (comentario.author.userName == user){
        comentario.esAutor = true;
      }
    }
    this.carga = true;
  }

  //Metodo para borrar comentario
  borrarComentario(comentario: comentario){
    this.servicio.borrarComentarios(this.post, comentario)
    .subscribe(next => {window.location.reload()});
  }

  //Metodo para crear un comentario
  crearComentario(){
    let postDelComentario: post= this.post;
    let comentario: comentario = this.formularioComentario.value;
    comentario.author = this.user;
    this.servicio.crearComentarios(postDelComentario, comentario)
    .subscribe(resp => window.location.reload())
  }

  //Metodo para mostrar el formulario de comentario
  mostrarForm(){
    this.mostrar = true;
  }
  //Metodo para ocultar el formulario de comentario
  ocultarForm(){
    this.mostrar = false;
  }
}
