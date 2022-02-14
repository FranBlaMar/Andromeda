import { Component, OnInit } from '@angular/core';
import { apartado } from 'src/app/wiki/interfaces/wiki.interface';
import { ApartadoService } from './apartado.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  listaApartados: apartado[] = [];
  constructor(private servicio: ApartadoService) { }

  ngOnInit(): void {
    this.obtenerApartados();
  }

  obtenerApartados(){
    this.servicio.enviarPeticion()
    .subscribe(resp=>{
      this.listaApartados = resp;
    })
  }
}
