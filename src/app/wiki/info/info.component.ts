import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Informacion } from '../interfaces/wiki.interface';
import { InfoService } from './info.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  apartado: string = this.route.snapshot.params["nombreApartado"];
  busqueda: string = this.apartado;
  listInfo: Informacion[] = [];
  error: boolean = false; 
  constructor(private route:ActivatedRoute, private servicio: InfoService) { }

  ngOnInit(): void {
    this.obtenerInfo();
  }

  obtenerInfo(){
    this.listInfo.shift();
    this.error = false;
    this.servicio.enviarPeticion(this.apartado, this.busqueda)
    .subscribe({
      next: resp => this.listInfo.push(resp),
      error: error => this.error = true
      });
  }
}
