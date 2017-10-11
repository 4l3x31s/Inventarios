import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MdlArticulo} from "../model/mdl-articulo";

@Injectable()
export class SicService {
  headers: HttpHeaders;
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://app-pos.herokuapp.com';
  }

  listArticulos() {
    this.http.get(this.url + '/articulo').subscribe(data => {
      console.log(data);
    });
  }

  getArticulo(codigoArticulo: string) {
    this.http.get(this.url + '/articulo/' + codigoArticulo).subscribe(
      data => {
        console.log(data);
      });
  }

  addArtoculo(articulo: MdlArticulo) {
    this.http.post(this.url + '', articulo).subscribe(
      data => {
      console.log(data);
    });
  }
}
