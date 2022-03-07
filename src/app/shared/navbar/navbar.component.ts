import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apartado } from 'src/app/wiki/interfaces/wiki.interface';
import { ApartadoService } from './apartado.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  listaApartados: apartado[] = [];
  constructor(private servicio: ApartadoService, private router: Router) { }
  logeado: boolean = false;
  ngOnInit(): void {
    this.obtenerApartados();
    this.comprobarlogeado();
  }

  //Método para obtener los apartados de la wiki del navbar
  obtenerApartados(){
    this.servicio.enviarPeticion()
    .subscribe(resp=>{
      this.listaApartados = resp;
    })
  }

  //Metodo para viajar a la wiki
  viajar(apartadoNombre: string){
    window.location.href = "/info/" + apartadoNombre;
  }

  //Metodo para comprobar si el usuario esta logueado, para mostrar el enlace de cerrar sesión o no
  comprobarlogeado(){
    if(localStorage.getItem("jwt")){
      this.logeado = true;
    }
    else{
      this.logeado = false;
    }
  }

  //Metodo para cerrar sesion 
  cerrarSesion(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("userName")
    window.location.href = 'main';
  }
}
