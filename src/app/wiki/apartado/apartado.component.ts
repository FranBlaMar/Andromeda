import { Component, OnInit } from '@angular/core';
import { apartado } from '../interfaces/wiki.interface';
import { ApartadoService } from './apartado.service';

@Component({
  selector: 'app-apartado',
  templateUrl: './apartado.component.html',
  styles: [
  ]
})
export class ApartadoComponent implements OnInit {

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
