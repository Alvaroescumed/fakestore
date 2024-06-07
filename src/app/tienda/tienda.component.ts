import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service'

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{

  products = [];

  constructor(private _apiStore: StoreService){ }

  ngOnInit(){
    this._apiStore.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

}
