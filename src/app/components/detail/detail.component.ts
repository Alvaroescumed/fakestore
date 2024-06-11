import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../../services/store.service'
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  product: Product | any;
  id: number | any;

  constructor(
    private _apiStore: StoreService,
    private route: ActivatedRoute
  ){ }

  //traemos los detalles del producto usando su id como parametro para la petición
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this._apiStore.getProductById(this.id).subscribe(
        product => this.product = product
      );
    });
  }

}
