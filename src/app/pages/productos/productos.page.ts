import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { Productos } from '../../services/productos';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonSearchbar,
    IonList,
    IonItem,
    IonLabel,
    FormsModule
  ]
})
export class ProductosPage implements OnInit {

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  textoBusqueda = '';

  constructor(
    private productoService: Productos,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  ionViewWillEnter() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productos = this.productoService.obtenerProductos();
    this.productosFiltrados = this.productos;
  }

  buscar() {

    const texto = this.textoBusqueda.toLowerCase();

    this.productosFiltrados =
      this.productos.filter(p =>
        p.codigoSap.toLowerCase().includes(texto) ||
        p.descripcion.toLowerCase().includes(texto)
      );
  }

  nuevo() {
    this.router.navigate(['/producto-form']);
  }

  editar(id: number) {
    this.router.navigate(['/producto-form', id]);
  }

  eliminar(id: number) {

    if (confirm('¿Eliminar producto?')) {
      this.productoService.eliminarProducto(id);
      this.cargarProductos();
    }
  }

  salir() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}