import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userCompleto } from 'src/app/login/interfaces/login.interface';
import { comentario, post } from '../interfaces/foro.interface';
import { ForoService } from '../services/foro.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() post!: post;
  comentarios: comentario [] = [];
  user!: userCompleto;
  mostrar: boolean = false;

  constructor(private servicio: ForoService, private builder: FormBuilder){}

  formularioComentario: FormGroup = this.builder.group({
    comment: [,[Validators.required]],
  });

  ngOnInit(): void {
    this.obtenerComentarios(this.post);
    this.user = this.servicio.obtenerUsuario();
  }

  //Método para obtener comentarios de un post
  obtenerComentarios(post: post){
    this.servicio.obtenerComentarios(post)
    .subscribe( resp => this.comentarios = resp)
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
