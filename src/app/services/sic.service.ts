import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MdlArticulo} from '../model/mdl-articulo';

@Injectable()
export class SicService {
  headers: HttpHeaders;
  url: string;
  valor: string;

  constructor(private http: HttpClient) {
    this.url = 'https://app-pos.herokuapp.com';
  }

  listArticulos() {
    this.http.get(this.url + '/articulo/list').subscribe(data => {
      console.log(data);
    });
  }

  getArticulo(codigoArticulo: string) {
    this.http.get(this.url + '/articulo/' + codigoArticulo).subscribe(
      data => {
        console.log(data);
      });
  }

  addArticulo(articulo: MdlArticulo) {
    this.valor = JSON.stringify(articulo);
    console.log(this.valor);
    this.http.post(this.url + '/articulo/add', this.valor, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(
      data => {
        console.log(data);
      });
  }
}
