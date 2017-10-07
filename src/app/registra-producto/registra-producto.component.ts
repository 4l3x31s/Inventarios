import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'sic-registra-producto',
  templateUrl: './registra-producto.component.html',
  styleUrls: ['./registra-producto.component.css']
})
export class RegistraProductoComponent implements OnInit {

  precioKilo = 0;
  pesoStock = 0;
  precioZonaLibre = 0;
  porcentajeGastos = 0;
  montoGasto = 0;
  precioCompra = 0;
  precioMercado = 0;
  precioVenta = 0;

  constructor() {
  }

  ngOnInit() {
  }

  public calculaPrecioFinal() {
    this.montoGasto = (this.porcentajeGastos * this.precioZonaLibre) / 100;
    this.precioCompra = (this.precioKilo * this.pesoStock) + this.precioZonaLibre + this.montoGasto;
    this.precioVenta = this.precioMercado = this.precioCompra;
  }

}
