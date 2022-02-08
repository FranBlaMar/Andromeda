import { Component, OnInit } from '@angular/core';
import { ApartadoService } from './apartado.service';

@Component({
  selector: 'app-apartado',
  templateUrl: './apartado.component.html',
  styles: [
  ]
})
export class ApartadoComponent implements OnInit {

  listaApartados: String[] = [];
  constructor(servicio: ApartadoService) { }

  ngOnInit(): void {
  }

  obtenerApartados(){

  }
  
}
