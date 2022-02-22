import { Component, OnInit } from '@angular/core';
import { userCompleto } from 'src/app/login/interfaces/login.interface';
import { DatosUserService } from '../services/datosUser.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  user!: userCompleto;
  constructor(private servicio: DatosUserService) { }

  ngOnInit(): void {
    this.servicio.obtenerUsuario()
    .subscribe (resp => {this.user = resp})
  }



}
