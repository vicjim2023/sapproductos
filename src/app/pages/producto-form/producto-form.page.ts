import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { Productos } from '../../services/productos';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.page.html',
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonButton,
    FormsModule
  ]
})
export class ProductoFormPage implements OnInit {

  producto: Producto = {
    id: 0,
    codigoSap: '',
    descripcion: ''
  };

  editando = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: Productos
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editando = true;

      const producto =
        this.productoService.obtenerPorId(+id);

      if (producto) {
        this.producto = producto;
      }
    }
  }

  guardar() {

    if (this.editando) {

      this.productoService.actualizarProducto(
        this.producto
      );

    } else {

      this.producto.id = Date.now();

      this.productoService.agregarProducto(
        this.producto
      );
    }

    this.router.navigate(['/productos']);
  }
}