import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccesoService } from '../services/acceso.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
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


  register(){
    console.log(this.formularioRegistro.value)
    this.servicio.register(this.formularioRegistro.value)
    .subscribe({
      next: (resp) => {
        console.log(resp)
        localStorage.setItem("jwt",resp.jwt_token);
        this.route.navigateByUrl("/usuario"); 
      },
      error: (err) => {
      }
    })
    this.formularioRegistro.reset();
  }
}
