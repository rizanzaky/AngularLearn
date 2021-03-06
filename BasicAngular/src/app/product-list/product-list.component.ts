import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  productsCount = products.length;

  constructor() { }

  ngOnInit(): void {
  }

  OnShareClicked(product: any): void {
    window.alert("Shared " + product.name + " successfully!");
  }

  OnNotifyClicked(): void {
    window.alert("Notified!");
  }
}