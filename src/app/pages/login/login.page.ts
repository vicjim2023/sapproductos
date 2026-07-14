import { Component } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    FormsModule
  ]
})
export class LoginPage {

  usuario = '';
  password = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  ingresar() {

    if (this.auth.login(this.usuario, this.password)) {
      this.router.navigate(['/productos']);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }
}