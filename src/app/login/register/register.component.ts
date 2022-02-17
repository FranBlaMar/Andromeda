import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../interfaces/login.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  user!: user;

  formularioRegistro: FormGroup = this.builder.group({
    nombreUsuario: [ '', [ Validators.required, Validators.minLength(3) ] ],
    contraseña: ['',[Validators.required, Validators.minLength(8), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]],
    nombre: ['',[Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    email: ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$")]]
  });
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }


  register(){
    console.log(this.formularioRegistro.value);
    this.formularioRegistro.reset();
  }
}
