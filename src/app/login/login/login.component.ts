import { Component, OnInit } from '@angular/core';
import { userLogin } from '../interfaces/login.interface';
import { AccesoService } from '../services/acceso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [""
  ]
})
export class LoginComponent implements OnInit {
  user: userLogin = {
    "userName": 'User',
    "password": 'user'
  };
  constructor(private servicio: AccesoService, private route: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.servicio.login(this.user)
    .subscribe({
      next: (resp) => {
        console.log(resp)
        localStorage.setItem("jwt",resp.token);
        this.route.navigateByUrl("/user");
        
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
