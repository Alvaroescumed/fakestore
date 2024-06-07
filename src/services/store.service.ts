import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // traemosm la url de la api que vamos a usar para la tienda
  url = 'https://fakestoreapi.com/products'; 

  constructor(private http: HttpClient) { }

  // creamos una funcion que nos haga la petición get a la API para que nos traiga los datos
  getProducts(){
    return this.http.get(this.url);
  }
}
