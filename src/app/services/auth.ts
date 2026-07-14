import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private usuario = 'admin';
  private password = '1234';

  login(user: string, pass: string): boolean {
    if (user === this.usuario && pass === this.password) {
      localStorage.setItem('logged', 'true');
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('logged');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('logged') === 'true';
  }
}