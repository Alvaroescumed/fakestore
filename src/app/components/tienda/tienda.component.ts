import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../../services/store.service'
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{

  products: Product[] = [];
  category: string = '';

  constructor(
    private _apiStore: StoreService,
    private route: ActivatedRoute
  ){ }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.loadProducts();
    });
  }

  loadProducts(){
    if (this.category) {
      this._apiStore.getProductsByCategory(this.category).subscribe(
        (products: Product[]) => this.products = products
      );
    } else {
      this._apiStore.getProducts().subscribe(
        (products: Product[]) => this.products = products
      );}
  }
}
