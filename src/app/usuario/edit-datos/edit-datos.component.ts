import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userCompleto } from 'src/app/login/interfaces/login.interface';
import { DatosUserService } from '../services/datosUser.service';

@Component({
  selector: 'app-edit-datos',
  templateUrl: './edit-datos.component.html',
  styleUrls: ['./edit-datos.component.css']
})
export class EditDatosComponent implements OnInit {
  carga: boolean = false;
  userDescrip!: userCompleto;

  formularioEditarDatos: FormGroup = this.builder.group({
    userName: [],
    name: [,[Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    aboutMe: [],
    email: [,],
    numberOfComents:[],
    numberOfPosts: []
  });

  constructor(private builder: FormBuilder, private servicio: DatosUserService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.obtenerUsuario()
    .subscribe (resp => { 
      this.formularioEditarDatos.reset(
      {
        userName: resp.userName,
        name: resp.name,
        aboutMe: resp.aboutMe,
        email: resp.email,
        numberOfComents: resp.numberOfComents,
        numberOfPosts: resp.numberOfPosts
      }
    )

  });
  
  }

  //Metodo que para editar un usuario
  editarUsuario(){
    this.servicio.modificarUsuario(this.formularioEditarDatos.value)
    .subscribe(
      next => {
        this.router.navigateByUrl("usuario");
      }
    )
  }

}
