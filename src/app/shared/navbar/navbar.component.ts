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

  ngOnInit(): void {
    this.obtenerApartados();
  }

  obtenerApartados(){
    this.servicio.enviarPeticion()
    .subscribe(resp=>{
      this.listaApartados = resp;
    })
  }

  viajar(apartadoNombre: string){
    window.location.href = "/info/" + apartadoNombre;
  }
}
