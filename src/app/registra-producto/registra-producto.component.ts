import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'sic-registra-producto',
  templateUrl: './registra-producto.component.html',
  styleUrls: ['./registra-producto.component.css']
})
export class RegistraProductoComponent implements OnInit {
  formulaArticulo = 50 * 2 + 50;
  kilo;
  constructor() {
  }
  ngOnInit() {
  }

}
