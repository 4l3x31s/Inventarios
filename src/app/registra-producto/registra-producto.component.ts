import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {ResponseArticulo} from "../response/response-articulo";
import {ServicioSicService} from "../services/servicio-sic.service";
import {SicService} from "../services/sic.service";
import {MdlArticulo} from "../model/mdl-articulo";
import {ObjArticulo} from "../clases/obj-articulo";
import {ResponseGetArticulo} from "../response/response-get-articulo";

@Component({
  selector: 'sic-registra-producto',
  templateUrl: './registra-producto.component.html',
  styleUrls: ['./registra-producto.component.css']
})
export class RegistraProductoComponent implements OnInit {
  respuestaArticulo: ResponseGetArticulo;
  codigoArticulo;
  descripcion;
  precioKilo = 0;
  pesoStock = 0;
  precioZonaLibre = 0;
  porcentajeGastos = 0;
  montoGasto = 0;
  precioCompra = 0;
  precioMercado = 0;
  precioVenta = 0;
  seActualiza: boolean;
  mensaje;

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
    //this.sicService.listArticulos();
    //this.sicService.addArticulo(new MdlArticulo(new ObjArticulo('T01asdas', 'TABLE SAMSUNG 10', 'tab 10', 15, 1.5, 500, 5,
    //  15, 350.5, 400.69, 410.99)));
    /*this.sicService.addPost2(new MdlArticulo(new ObjArticulo('T01asdas', 'TABLE SAMSUNG 10', 'tab 10', 15, 1.5, 500, 5,
      15, 350.5, 400.69, 410.99)));*/
    //this.sicService.examplePost();
    this.seActualiza = false;
  }

  public calculaPrecioFinal() {
    this.montoGasto = (this.porcentajeGastos * this.precioZonaLibre) / 100;
    this.precioCompra = (this.precioKilo * this.pesoStock) + this.precioZonaLibre + this.montoGasto;
  }

  public buscaProducto() {
    this.seActualiza = false;
    this.descripcion = '';
    this.precioKilo = 0;
    this.pesoStock = 0;
    this.precioZonaLibre = 0;
    this.porcentajeGastos = 0;
    this.precioCompra = 0;
    this.precioMercado = 0;
    this.precioVenta = 0;
    this.mensaje = '';
    this.montoGasto = 0;
    this.sicService.getArticulo(this.codigoArticulo).subscribe(
      data => {
        console.log(data);
        //this.respuestaArticulo = data;
        if (data.articulo != null) {
          this.seActualiza = true;
          this.descripcion = data.articulo.nombre;
          this.precioKilo = data.articulo.precioKilo;
          this.pesoStock = data.articulo.peso;
          this.precioZonaLibre = data.articulo.precioZonaLibre;
          this.porcentajeGastos = data.articulo.porcentajeGasto;
          this.precioCompra = data.articulo.precioCompra;
          this.precioMercado = data.articulo.precioMercado;
          this.precioVenta = data.articulo.precioVenta;
          this.montoGasto = (this.porcentajeGastos * this.precioZonaLibre) / 100;
          this.mensaje = data.articulo.descripcion;
        }
      });
  }

  public guardarArticulo() {
    if (!this.seActualiza) {
      this.sicService.addArticulo(new MdlArticulo(new ObjArticulo(this.codigoArticulo, this.descripcion,
        this.mensaje, this.precioKilo, this.pesoStock, this.precioZonaLibre, this.porcentajeGastos,
        this.montoGasto, this.precioCompra, this.precioVenta, this.precioMercado)));
    } else {
      this.sicService.updateArticulo(new MdlArticulo(new ObjArticulo(this.codigoArticulo, this.descripcion,
        this.mensaje, this.precioKilo, this.pesoStock, this.precioZonaLibre, this.porcentajeGastos,
        this.montoGasto, this.precioCompra, this.precioVenta, this.precioMercado)));
    }
  }

  public eliminarArticulo() {
    if (this.seActualiza) {
      console.log(this.seActualiza)
      this.sicService.deleteArticulo(this.codigoArticulo);
    }
  }

}
