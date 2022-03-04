import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForoService } from '../services/foro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent implements OnInit {

  constructor(private builder: FormBuilder, private servicio: ForoService, private route: Router) { }

  formularioPost: FormGroup = this.builder.group({
    title: [,[Validators.required]],
    body: [,[Validators.required]],
  });
  
  ngOnInit(): void {
    this.servicio.obtenerUsuario();
  }

  //Metodo para crear un post
  crearPost(){
    this.servicio.crearPost(this.formularioPost.value)
    .subscribe(resp => {this.route.navigateByUrl('foro')});
  }
}
