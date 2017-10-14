import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MdlArticulo} from '../model/mdl-articulo';
import {ResponseGetArticulo} from "../response/response-get-articulo";

@Injectable()
export class SicService {
  headers: HttpHeaders;
  url: string;
  valor: string;
  jsonNew: string;

  constructor(private http: HttpClient) {
    //this.url = 'https://app-pos.herokuapp.com';
    this.url = 'http://localhost:8080';
  }

  listArticulos() {
    this.http.get(this.url + '/articulo/list').subscribe(data => {
      console.log(data);
    });
  }

  getArticulo(codigoArticulo: string) {
    return this.http.get<ResponseGetArticulo>(this.url + '/articulo/quest/' + codigoArticulo);
  }

  addArticulo(articulo: MdlArticulo) {
    this.valor = JSON.stringify(articulo);
    this.http.post(this.url + '/articulo/add', this.valor, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(
      data => {
        return data;
      });
  }

  updateArticulo(articulo: MdlArticulo) {
    this.valor = JSON.stringify(articulo);
    this.http.put(this.url + '/articulo/update/' + articulo.objetoArticulo.codigo, this.valor, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).subscribe(
      data => {
        return data;
      });
  }

  addPost2(articulo: MdlArticulo) {
    this.valor = JSON.stringify(articulo);
    this.http.post('https://reqres.in/api/users', this.valor, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
    }).subscribe(
      data => {
        return data;
      });
  }

  examplePost() {
    this.valor = `{
      "nombre":"Alexeis",
      "dato":"adsadsad"
    }`;
    this.http.post('http://localhost:10080/Ocio-web/rest/members/tarea', this.valor, {
      headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8'),
    }).subscribe(
      data => {
        console.log(data);
      });
  }
}
