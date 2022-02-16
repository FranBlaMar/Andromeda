import { Component, OnInit } from '@angular/core';
import { userLogin } from '../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [""
  ]
})
export class LoginComponent implements OnInit {
  user!: userLogin;
  constructor() { }

  ngOnInit(): void {
  }

  

}
