import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { map, catchError, of } from 'rxjs';
import { AccesoService } from './login/services/acceso.service';

@Injectable()
export class Guardian implements CanActivate{

    constructor(private router:Router, private servicioAcceso: AccesoService){};

    canActivate(){
        let tokenValido:boolean = false;
        return this.servicioAcceso.comprobarToken()
        //Usamos .pipe para poder hacer un return, ya que subscribe es asincrono
        .pipe(
            map(resp =>{
                tokenValido = true;
                return tokenValido;
            }),
            catchError (err =>{
                tokenValido = false;
                this.router.navigateByUrl('auth');
                return of(tokenValido)
            })
        )
    }


}