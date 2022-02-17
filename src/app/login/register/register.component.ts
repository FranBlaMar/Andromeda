import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces/login.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  user!: user;
  constructor() { }

  ngOnInit(): void {
  }

}
