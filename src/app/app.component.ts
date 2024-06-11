import { Component, OnInit } from '@angular/core';
import {StoreService} from '../services/store.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fakestore';

  categories = [];


  constructor(private _apiStore: StoreService){ }

  ngOnInit(){
    this._apiStore.getCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
}
