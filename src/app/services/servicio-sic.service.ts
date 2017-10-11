import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicioSicService {
  url = 'https://app-pos.herokuapp.com/articulo';
  cabecera: any;

  constructor(private http: Http) {
  }

  getArticulos() {
    this.cabecera = new Headers();
    this.cabecera.set('token', '123');
    this.cabecera.set('Content-Type', 'application/json');
    return this.http.get(this.url, {
      headers: this.cabecera
    }).map(res => res.json())
      .toPromise();
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25')
      .map(res => res.json())
      .toPromise();
  }
}
