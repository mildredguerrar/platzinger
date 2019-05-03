import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: string = 'login';
  email: string = null;
  password: string = null;
  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this.password)
     .then((data) => {
        alert('Registrado correctamente');
      }).catch((error) => console.log(error));
  }

  login() {
    console.log('entra al login');
    this.authenticationService.loginWithEmail(this.email, this.password)
     .then((data) => {
        alert('Logeado correctamente');
      }).catch((error) => console.log(error));
  }
  loginWithFacebook(){
    this.authenticationService.loginWithFacebook()
     .then((data) => {
        alert('Logeado correctamente');
      }).catch((error) => console.log(error));

  }
}
