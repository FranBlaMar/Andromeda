import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../interfaces/foro.interface';
import { ForoService } from '../services/foro.service';

@Component({
  selector: 'app-detalles-post',
  templateUrl: './detalles-post.component.html',
  styleUrls: ['./detalles-post.component.css']
})
export class DetallesPostComponent implements OnInit {
  carga: boolean = false;
  post!: post;
  constructor(private servicio: ForoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost();
  }

  //Metodo para suscribirse a la peticion get de post por id
  getPost(){
    const id = this.route.snapshot.params['idPost'];
    this.servicio.getPostPorId(id)
    .subscribe( resp => {this.post = resp, this.carga = true})
  }
}
