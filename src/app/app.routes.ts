import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page')
      .then(m => m.LoginPage)
  },
  {
    path: 'productos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/productos/productos.page')
      .then(m => m.ProductosPage)
  },
  {
    path: 'producto-form',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/producto-form/producto-form.page')
      .then(m => m.ProductoFormPage)
  },
  {
    path: 'producto-form/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/producto-form/producto-form.page')
      .then(m => m.ProductoFormPage)
  }
];