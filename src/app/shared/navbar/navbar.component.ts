import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apartado } from 'src/app/wiki/interfaces/wiki.interface';
import { ApartadoService } from './apartado.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  listaApartados: apartado[] = [];
  constructor(private servicio: ApartadoService, private router: Router) { }
  logeado: boolean = false;
  paramsSubscription!: Subscription;

  ngOnInit(): void {
    this.paramsSubscription = this.router.events
      .subscribe(
        res => {
          this.comprobarlogeado();
        }
    );

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
    this.router.navigateByUrl("/info/" + apartadoNombre)
  }

  //Metodo para comprobar si el usuario esta logueado, para mostrar el enlace de cerrar sesión o no
  comprobarlogeado(){
    console.log("h")
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
    this.router.navigateByUrl('main');
  }
}
