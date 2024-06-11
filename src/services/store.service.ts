import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // traemosm la url de la api que vamos a usar para la tienda
  url = 'https://fakestoreapi.com/products'; 

  constructor(private http: HttpClient) { }

  // creamos una funcion que nos haga la petición get a la API para que nos traiga los datos
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  getProductsByCategory(category: string): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/category/${category}`);
  }

  getProductById(id: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}/${id}`)
  }

  getCategories(){
    return this.http.get(`${this.url}/categories`);
  }
}
