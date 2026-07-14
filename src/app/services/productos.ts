import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class Productos {

  private storageKey = 'productos_sap';

  obtenerProductos(): Producto[] {
    return JSON.parse(
      localStorage.getItem(this.storageKey) || '[]'
    );
  }

  guardarProductos(productos: Producto[]) {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify(productos)
    );
  }

  agregarProducto(producto: Producto) {
    const productos = this.obtenerProductos();
    productos.push(producto);
    this.guardarProductos(productos);
  }

  actualizarProducto(producto: Producto) {
    const productos = this.obtenerProductos();

    const index = productos.findIndex(
      p => p.id === producto.id
    );

    if (index !== -1) {
      productos[index] = producto;
      this.guardarProductos(productos);
    }
  }

  eliminarProducto(id: number) {
    const productos = this.obtenerProductos()
      .filter(p => p.id !== id);

    this.guardarProductos(productos);
  }

  obtenerPorId(id: number): Producto | undefined {
    return this.obtenerProductos()
      .find(p => p.id === id);
  }
}
