import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServicioSicService {
  url = 'https://app-pos.herokuapp.com/articulo';
  private headers = new Headers({
    'Content-Type': 'application/json',
    'token': '12312312'
  })

  constructor(private http: Http) {
  }

  getArticulos() {
    return this.http.get(this.url, {
      headers: this.headers
    }).map(res => res.json())
      .toPromise();
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25')
      .map(res => res.json())
      .toPromise();
  }
}
