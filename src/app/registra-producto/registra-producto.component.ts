import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {ResponseArticulo} from "../response/response-articulo";
import {ServicioSicService} from "../services/servicio-sic.service";
import {SicService} from "../services/sic.service";
import {MdlArticulo} from "../model/mdl-articulo";
import {ObjArticulo} from "../clases/obj-articulo";

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
  /*
   articulos: any;
   mensaje: any;
   respuesta: any;*/

  constructor(private servicioArticulo: ServicioSicService, private sicService: SicService) {
  }

  ngOnInit() {
    /*this.servicioArticulo.getArticulos()
     .then(data => {
     console.log(data.lista);
     })
     .catch(error => {
     console.error(error);
     });

     this.servicioArticulo.getUsers()
     .then(data => {
     console.log(data.results);
     })
     .catch(error => {
     console.error(error);
     });*/
    this.sicService.listArticulos();
    this.sicService.addArticulo(new MdlArticulo(new ObjArticulo('T01asdas', 'TABLE SAMSUNG 10', 'tab 10', 15, 1.5, 500, 5,
      15, 350.5, 400.69, 410.99)));
  }

  public calculaPrecioFinal() {
    this.montoGasto = (this.porcentajeGastos * this.precioZonaLibre) / 100;
    this.precioCompra = (this.precioKilo * this.pesoStock) + this.precioZonaLibre + this.montoGasto;
  }

}
