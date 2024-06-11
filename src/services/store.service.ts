import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from 'src/app/models/product.model';

 


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // traemosm la url de la api que vamos a usar para la tienda
  url = 'https://fakestoreapi.com/products'; 

  constructor(private http: HttpClient) { }

  // creamos varias funciones para que nos traiga los datos de la API mediante las prticiones http
  getProducts(){
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: number){
    return this.http.get<Product[]>(`${this.url}/${id}`)
  }

  getCategories(){
    return this.http.get(`${this.url}/categories`);
  }
}
