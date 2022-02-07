import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [".card{ height: 370px; margin-top: auto; margin-bottom: auto;width: 400px;background-color: rgba(0,0,0,0.5) !important;}"
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
