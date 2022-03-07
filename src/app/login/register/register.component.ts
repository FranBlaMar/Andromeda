import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccesoService } from '../services/acceso.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [ ".pagina{min-height: 80vh; margin-top: 7rem;} button:hover {box-shadow: 0px 0px 15px rgb(0,0,0);} a{text-decoration: none}"
  ]
})
export class RegisterComponent implements OnInit {

  formularioRegistro: FormGroup = this.builder.group({
    userName: [ '', [ Validators.required, Validators.minLength(3) ] ],
    password: ['',[Validators.required, Validators.minLength(8), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]],
    name: ['',[Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    email: ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$")]]
  });
  constructor(private builder: FormBuilder, private servicio: AccesoService, private route: Router) { }

  ngOnInit(): void {
  }

  //Metodo para registrar un usuario
  register(){
    this.servicio.register(this.formularioRegistro.value)
    .subscribe({
      next: (resp) => {
        localStorage.setItem("jwt",resp.jwt_token);
        localStorage.setItem("userName",this.formularioRegistro.value.userName);
        window.location.href = "usuario"; 
      },
      error: (err) => {
        Swal.fire({
          title: 'Error...',
          text: `${err.error.mensajeDeError}`,
          width: 600,
          padding: '5em',
          color: '#FFF',
          background: ' url(./assets/img/fondoError.gif)',
          backdrop: `
            rgba(0,0,123,0.4)
          `
        })
      }
    })
    this.formularioRegistro.reset();
  }
}
