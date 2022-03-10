import { Component, OnInit } from '@angular/core';
import { userLogin } from '../interfaces/login.interface';
import { AccesoService } from '../services/acceso.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  clase: boolean = false;
  user: userLogin = {
    userName: '',
    password: ''
  };
  constructor(private servicio: AccesoService, private route: Router) { }

  ngOnInit(): void {
  }

  //Metodo para hacer login
  login(){
    this.servicio.login(this.user)
    .subscribe({
      next: (resp) => {
        localStorage.setItem("jwt",resp.jwt_token);
        localStorage.setItem("userName",this.user.userName);
        this.route.navigateByUrl("usuario") 
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
  }


}
